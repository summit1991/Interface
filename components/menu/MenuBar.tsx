import * as React from 'react';
import {useEffect} from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar
} from "@mui/material";
import Icon from '@mui/material/Icon'
import useSWR from 'swr'
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Link from "next/link";
import {useRouter} from "next/router";

/**
 * TODO 어뷰징 방지 -> 눌러진 단말의 경우 3초 정도 클릭 불가처리
 */
const fetcher = () => fetch('http://localhost:8083/v1/menus').then((res) => res.json())
export default function MenuBar() {
  const currentPath = useRouter().pathname
  const [menuStatusMap, setMenuStatusMap] = React.useState(undefined)
  const {data, error} = useSWR('http://localhost:8083/v1/menus', fetcher)

  useEffect(() => initializeMenuStatuses(data, currentPath, setMenuStatusMap), [data]) // 최초에 한 번 실행, data 변경되고 실행, 안에서 선택된 메뉴 바꾸고 실행

  if (error) return <div>Failed to load</div>
  if (!menuStatusMap) return <div>Loading...</div>

  return (
    <>
      <Toolbar/>
      <>
        {data.map(group => {
          const items = group.items
          return (
            <List
              key={group.id}
              subheader={
                <ListSubheader component={"div"}>{group.title}</ListSubheader>
              }
            >
              {renderMenuItems(items, menuStatusMap, setMenuStatusMap)}
            </List>
          )
        })
        }
      </>
    </>
  )
}
const initializeMenuStatuses = (data, initialPath, setMenuStatusMap) => {
  if (data) {
    const initializingMenuStatusMap = {}
    data.forEach(group => initializeMenuStatusRecursively(initializingMenuStatusMap, initialPath, group.items, undefined))
    setMenuStatusMap(initializingMenuStatusMap)
  }
}
const initializeMenuStatusRecursively = (initializingMenuStatusMap, initialPath, menuItems, parentId) => {
  menuItems.forEach(menuItem => {
    const isLeafItem = !menuItem.children.length
    if (isLeafItem) {
      initializingMenuStatusMap[menuItem.id] = {
        id: menuItem.id,
        leaf: true,
        selected: menuItem.path === initialPath,
        parentId
      }
    } else {
      initializingMenuStatusMap[menuItem.id] = {
        id: menuItem.id,
        leaf: false,
        selected: initialPath.startsWith(menuItem.path),
        parentId
      }
      initializeMenuStatusRecursively(initializingMenuStatusMap, initialPath, menuItem.children, menuItem.id)
    }
  })
}
const renderMenuItems = (menuItems, menuStatusMap, setMenuStatusMap) => {
  return menuItems.map(item => {
    const isLeafItem = !item.children?.length
    if (isLeafItem) {
      return <LeafMenuItem key={item.id}
                           item={item}
                           menuStatusMap={menuStatusMap}
                           setMenuStatusMap={setMenuStatusMap}
      />
    } else {
      return <IntermediateMenuItem key={item.id}
                                   item={item}
                                   menuStatusMap={menuStatusMap}
                                   setMenuStatusMap={setMenuStatusMap}
      />
    }
  })
}

const LeafMenuItem = ({item, menuStatusMap, setMenuStatusMap}) => {
  return (
    <Link href={item.path}>
      <ListItem disablePadding key={item.id}>
        <ListItemButton selected={menuStatusMap[item.id]?.selected}
                        onClick={() => onClickLeafMenuItem(item.id, menuStatusMap, setMenuStatusMap)}>
          <ListItemIcon>
            <Icon>inbox</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name}/>
          {(item.children?.length) ? <ExpandLess/> : ''}
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
const onClickLeafMenuItem = (id, menuStatusMap, setMenuStatusMap) => { // TODO 옵션화 (다른 단말을 누르더라도 기존에 열린 중계를 닫지 않는)
  const result = {}
  const selectedMenuIds = [id]

  let parentId = menuStatusMap[id]?.parentId
  while (parentId) {
    selectedMenuIds.push(parentId)
    parentId = menuStatusMap[parentId]?.parentId
  }

  Object.entries(menuStatusMap).forEach((menu: object) => {
    if (selectedMenuIds.includes(menu[0])) {
      menu[1].selected = true
      result[menu[0]] = menu[1]
    } else {
      // 선택된 친구의 id 포함 부모까지 다 구해와야
      menu[1].selected = false
      result[menu[0]] = menu[1]
    }
  })

  setMenuStatusMap({
    ...result
  })
}

const IntermediateMenuItem = ({item, menuStatusMap, setMenuStatusMap}) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => onClickIntermediateMenuItem(item.id, menuStatusMap, setMenuStatusMap)}>
          <ListItemIcon>
            <Icon>inbox</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name}/>
          {menuStatusMap[item.id]?.selected ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStatusMap[item.id]?.selected} timeout="auto" unmountOnExit>
        <List component={"div"} disablePadding key={item.children.length}>
          {(item.children?.length ?? false) ? renderMenuItems(item.children, menuStatusMap, setMenuStatusMap) : ''}
        </List>
      </Collapse>
    </>
  )
}
const onClickIntermediateMenuItem = (id, menuStatusMap, setMenuStatusMap) => { // TODO 선택한 트리를 제외하고는 모두 닫을 수도 있는 옵션 추가. 기본 정책은 그냥 둔다.
  menuStatusMap[id].selected = !menuStatusMap[id].selected
  console.log(2)
  setMenuStatusMap({...menuStatusMap})
}

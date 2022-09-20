import * as React from 'react';
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
import {useEffect} from "react";

const fetcher = () => fetch('http://localhost:8083/v1/menus').then((res) => res.json())

export default function MenuBar() {
  const currentPath = useRouter().pathname
  const [flattenMenuItemById, setFlattenMenuItemById] = React.useState(undefined)
  const [selectedMenuItemId, setSelectedMenuItemId] = React.useState(undefined)
  const {data, error} = useSWR('http://localhost:8083/v1/menus', fetcher)

  useEffect(() => {
    if (!flattenMenuItemById && !selectedMenuItemId && data) {
      const map = {}
      createFlattenMenuItemMap(map, currentPath, data)
      const id = Object.entries(map).find(ele => ele[1].leaf && ele[1].selected)
      setFlattenMenuItemById(map)
      setSelectedMenuItemId(id[0])
    }
  })

  /*
  console.log(flattenMenuItemById)
  console.log(selectedMenuItemId)
  */


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

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
              {renderItems(items, currentPath, flattenMenuItemById, setFlattenMenuItemById, selectedMenuItemId, setSelectedMenuItemId)}
            </List>
          )
        })
        }
      </>
    </>
  )
}

const createFlattenMenuItemMap = (map, currentPath, groups) => {
  groups.forEach(group => recursiveSearchMenuItem(map, currentPath, group.items, undefined))
}

const recursiveSearchMenuItem = (map, currentPath, items, parentId) => {
  items.forEach(item => {
    const isLeafItem = !item.children.length
    if (isLeafItem) {
      map[item.id] = {
        id: item.id,
        leaf: true,
        selected: item.path === currentPath,
        parentId
      }
    } else {
      map[item.id] = {
        id: item.id,
        leaf: false,
        selected: currentPath.startsWith(item.path),
        parentId
      }
      recursiveSearchMenuItem(map, currentPath, item.children, item.id)
    }
  })
}

const renderItems = (items, pathname, flattenMenuItemById, setFlattenMenuItemById, selectedMenuItemId, setSelectedMenuItemId) => {
  return items.map(item => {
    const isLeafItem = !item.children?.length
    if (isLeafItem)
      return <LeafMenuItem key={item.id}
                           item={item}
                           pathname={pathname}
                           flattenMenuItemById={flattenMenuItemById}
                           setFlattenMenuItemById={setFlattenMenuItemById}
                           selectedMenuItemId={selectedMenuItemId}
                           setSelectedMenuItemId={setSelectedMenuItemId}
      />
    else {
      return <IntermediateMenuItem key={item.id}
                                   item={item}
                                   pathname={pathname}
                                   flattenMenuItemById={flattenMenuItemById}
                                   setFlattenMenuItemById={setFlattenMenuItemById}
                                   selectedMenuItemId={selectedMenuItemId}
                                   setSelectedMenuItemId={setSelectedMenuItemId}
      />
    }
  })
}

const LeafMenuItem = props => {
  const item = props.item
  const pathname = props.pathname

  const flattenMenuItemById = props.flattenMenuItemById
  const setFlattenMenuItemById = props.setFlattenMenuItemById
  const selectedMenuItemId = props.selectedMenuItemId
  const setSelectedMenuItemId = props.setSelectedMenuItemId


  const onClick = id => {
    // TODO 옵션에 따라 선택된 단말 이외에 열려있는 트리를 모두 닫는 거 추가. 기본 정책은 그냥 둔다.
    const result = {}

    const selectedMenuIds = [id]
    let parentId = flattenMenuItemById[id]?.parentId
    while (parentId) {
      selectedMenuIds.push(parentId)
      parentId = flattenMenuItemById[parentId]?.parentId
    }

    Object.entries(flattenMenuItemById).forEach(menu => {
      if (selectedMenuIds.includes(menu[0])) {
        menu[1].selected = true
        result[menu[0]] = menu[1]
      } else {
        // 선택된 친구의 id 포함 부모까지 다 구해와야
        menu[1].selected = false
        result[menu[0]] = menu[1]
      }
    })


    console.log(result)
    setFlattenMenuItemById({
      ...result
    })

    setSelectedMenuItemId(id)
  }

  return (
    <Link href={item.path} passHref>
      <ListItem disablePadding key={item.id}>
        <ListItemButton selected={item.id === selectedMenuItemId} onClick={() => onClick(item.id)}>
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

const IntermediateMenuItem = props => {
  const item = props.item
  const pathname = props.pathname

  const flattenMenuItemById = props.flattenMenuItemById
  const setFlattenMenuItemById = props.setFlattenMenuItemById
  const selectedMenuItemId = props.selectedMenuItemId
  const setSelectedMenuItemId = props.setSelectedMenuItemId


  const onClickItem = id => {
    // TODO 선택한 트리를 제외하고는 모두 닫을 수도 있는 옵션 추가. 기본 정책은 그냥 둔다.

    const meStatus = flattenMenuItemById[id]

    meStatus.selected = !meStatus.selected

    const result = { }
    result[id] = meStatus

    setFlattenMenuItemById({
      ...flattenMenuItemById,
      ...result
    })
  }

  let selected = flattenMenuItemById && flattenMenuItemById[item.id]?.selected

  const haveChildren = item.children?.length
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => onClickItem(item.id)}>
          <ListItemIcon>
            <Icon>inbox</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name}/>
          {selected ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
      </ListItem>
      <Collapse in={selected} timeout="auto" unmountOnExit>
        <List component={"div"} disablePadding key={item.children.length}>
          {haveChildren ? renderItems(item.children, pathname, flattenMenuItemById, setFlattenMenuItemById, selectedMenuItemId, setSelectedMenuItemId) : ''}
        </List>
      </Collapse>
    </>
  )
}

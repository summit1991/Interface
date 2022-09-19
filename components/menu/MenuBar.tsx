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

  const selectedMenuItemId = props.selectedMenuItemId

  /*const flattenMenuItemById = props.flattenMenuItemById
  const setFlattenMenuItemById = props.setFlattenMenuItemById
  const selectedMenuItemId = props.selectedMenuItemId
  const setSelectedMenuItemId = props.setSelectedMenuItemId

  setFlattenMenuItemById()*/

  /*if (!selectedMenuItemId && pathname === item.path) {
    useEffect(() => {
      setSelectedMenuItemId(item.id)
      // 중계메뉴를 모두 활성화
    })
  }

  const onClick = (id) => {
    setSelectedMenuItemId(id)
    // 중계메뉴를 모두 활성화
    // 선택된 메뉴 트리를 제외하고 닫을 수 있는 기능 on/off
  }*/

// console.log(item.id, selectedMenuItemId)

  return (
    <Link href={item.path} passHref>
      <ListItem disablePadding key={item.id}>
        <ListItemButton selected={item.id === selectedMenuItemId}>
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
    // 선택한 트리를 제외하고는 모두 닫을 수도 있고
    // 그냥 둘 수도 있다.
    // 옵션으로 두면 되겠지만 일단 그냥 두는 것을 default

    const meStatus = flattenMenuItemById[id]

    meStatus.selected = !meStatus.selected
    
    setFlattenMenuItemById({
      ...flattenMenuItemById,
      meStatus
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
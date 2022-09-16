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
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetcher = () => fetch('http://localhost:8083/v1/menus').then((res) => res.json())

export default function MenuBar() {
  const currentPath = useRouter().pathname
  const [selectedLeafMenuItemId, setSelectedLeafMenuItemId] = React.useState(undefined)
  const { data, error } = useSWR('http://localhost:8083/v1/menus', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // 선택된 말단마다 자신의 중계 id를 순서대로 저장해놓고
  // 말단이 바뀌면 open 을 갱신할 수도 있고 아니할 수도 있음



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
              {renderItems(items, currentPath, selectedLeafMenuItemId, setSelectedLeafMenuItemId)}
            </List>
          )
        })
        }
      </>
    </>
  )
}

const renderItems = (items, pathname, selectedLeafMenuItemId, setSelectedLeafMenuItemId) => {
  return items.map(item => {
    const isLeafItem = !item.children?.length
    if (isLeafItem)
      return <LeafMenuItem key={item.id}
                           item={item}
                           pathname={pathname}
                           selectedLeafMenuItemId={selectedLeafMenuItemId}
                           setSelectedLeafMenuItemId={setSelectedLeafMenuItemId}
      ></LeafMenuItem>
    else
      return <IntermediateMenuItem key={item.id}
                                   item={item}
                                   pathname={pathname}
                                   selectedLeafMenuItemId={selectedLeafMenuItemId}
                                   setSelectedLeafMenuItemId={setSelectedLeafMenuItemId}
      ></IntermediateMenuItem>
  })
}

const LeafMenuItem = props => {
  const item = props.item
  const pathname = props.pathname
  const selectedLeafMenuItemId = props.selectedLeafMenuItemId
  const setSelectedLeafMenuItemId = props.setSelectedLeafMenuItemId


  if (!selectedLeafMenuItemId && pathname === item.path) {
    useEffect(_ => {
      setSelectedLeafMenuItemId(item.id)
    })
  }

  const onClick = (id) => {
    setSelectedLeafMenuItemId(id)
  }

  return (
    <Link href={item.path} passHref>
      <ListItem disablePadding key={item.id}>
        <ListItemButton selected={item.id === selectedLeafMenuItemId} onClick={_ => onClick(item.id)}>
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
  const selectedLeafMenuItemId = props.selectedLeafMenuItemId
  const setSelectedLeafMenuItemId = props.setSelectedLeafMenuItemId

  const [isOpened, setIsOpened] = React.useState(pathname.startsWith(item.path))

  const onClickItem = () => {
    setIsOpened(!isOpened)
  }

  const haveChildren = item.children?.length

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onClickItem}>
          <ListItemIcon>
            <Icon>inbox</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name}/>
          {isOpened ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
      </ListItem>
      <Collapse in={isOpened} timeout="auto" unmountOnExit>
        <List component={"div"} disablePadding key={item.children.length}>
          {haveChildren ? renderItems(item.children, pathname, selectedLeafMenuItemId, setSelectedLeafMenuItemId) : ''}
        </List>
      </Collapse>
    </>
  )
}

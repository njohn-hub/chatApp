import React from 'react'
import './List.css'
import UserInfo from './UserInfo/UserInfo'
import ChatList from './ChatList/ChatList'

const List = () => {
  return (
    <div className='List'>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List

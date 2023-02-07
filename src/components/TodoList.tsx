import React from 'react'
import TodoContent from './TodoContent'

export default function TodoList() {
  return (
    <div className='[&>*]:mb-2'>
      <TodoContent/>
      <TodoContent/>
      <TodoContent/>
      <TodoContent/>
    </div>
  )
}

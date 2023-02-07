
import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoContent from '../components/TodoContent'
import TodoList from '../components/TodoList'

export default function Todo() {
  return (
    <div className='w-full max-w-lg text-center bg-blue-300 px-5 py-3 h-[75vh] rounded'>
        <h2 className='text-4xl font-bold'>Todo List</h2>
        <div>
            <TodoInput/>
            <TodoList/>
        </div>
    </div>
  )
}

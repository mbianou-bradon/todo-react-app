

import React from 'react'

export default function TodoContent() {
  return (
    <div>
        <div className='flex items-center justify-center text-sm'>
            <h2>Add another Todo to the list</h2>
            <div  className='[&>*]:bg-white [&>*]:border-2 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-lg [&>*]:ml-4 [&>*]:cursor-pointer [&>*:active]:scale-95'>
                <button className='text-green-600 border-green-600 hover:bg-green-600 hover:text-white'>Done</button>
                <button className='text-red-600 border-red-600 hover:bg-red-600 hover:text-white'>Remove</button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function TodoInput() {
  return (
    <div>
        <div className='my-5'>
            <div>
                <input type="text" name="" id="" placeholder="Add Todo. . ." className="w-[17rem] bg-white border-2 border-white py-2 rounded mx-4 pl-2 text-sm"/>

                <button className='bg-white border-2 px-4 py-2  rounded text-green-600 border-green-600 hover:bg-green-600 hover:text-white active:scale-95'>Add</button>
            </div>
        </div>
    </div>
  )
}

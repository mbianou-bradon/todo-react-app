import React from 'react';
import './App.css';
import Todo from './pages/Todo';


function App() {

  return (
    <div className="App flex items-center justify-center min-h-screen text-slate-800 max-w-[85rem] mx-auto [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">

     <Todo />
    </div>
  )
}

export default App;

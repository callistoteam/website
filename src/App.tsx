import React, { useState } from 'react'
import './App.css'

// Note: imports from src/tailwindcss-classnames, not the actual npm package. See compilerOptions.baseUrl in tsconfig.json
import { classnames } from 'tailwindcss-classnames'
import Navbar from './components/Navbar'

function App() {
  return <div className={`${classnames('bg-black')} ${classnames('h-screen')}`}>
      <Navbar transparent />
    </div>
}

export default App

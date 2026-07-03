import React from 'react'
import { SearchBar } from './component/SearchBar'
import { Tab } from './component/Tab'
import { ResultGrid } from './component/ResultGrid'

export const App = () => {
  return (
    <div className='text-white w-full bg min-h-screen bg-gray-950'>
      <SearchBar />
      <Tab />
      <ResultGrid/>
    </div>
  )
}

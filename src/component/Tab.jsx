import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../api/redux/features/searchSlice'

export const Tab = () => {
  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()

  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            className={`${
              activeTab === elem ? 'bg-blue-700' : 'bg-gray-500'
            } cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            onClick={() => {
              dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}
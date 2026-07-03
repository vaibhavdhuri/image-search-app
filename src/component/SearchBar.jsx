import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../api/redux/features/searchSlice'

export const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submithandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form
        onSubmit={submithandler}
        className='gap-5 bg-gray-800 px-14 py-10 flex'
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className='text-2xl px-6 py-3 w-full border-2'
          type='text'
          placeholder='Enter your name'
        />

        <button
          type='submit'
          className='active:scale-95 cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
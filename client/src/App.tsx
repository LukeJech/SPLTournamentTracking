import { useState } from 'react'
import GetTournaments from './tournaments/components/result_data'

function App() {


  return (
    <>
      <h1 className='text-md font-bold text-blue-500'>Splinterlands Tournaments!</h1>
      <GetTournaments />
      <p>working?</p>
    </>
  )
}

export default App

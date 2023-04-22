import React from 'react'
import { useFetch } from './useFetch'
import Tasks from './Tasks'
const Main = () => {
    const {data: tasks, error, isPending, deleteData} = useFetch("http://localhost:8000/Tasks")
  return (
    <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {tasks && <Tasks tasks={tasks} deleteData={deleteData}  />}
    </div>
  )
}

export default Main
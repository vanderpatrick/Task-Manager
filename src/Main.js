import React from 'react'
import { useFetch } from './useFetch'
import Tasks from './Tasks'
const Main = () => {
    const {data: tasks, error, isPending} = useFetch("http://localhost:3000/Tasks")
  return (
    <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {tasks && <Tasks tasks={tasks} />}
    </div>
  )
}

export default Main
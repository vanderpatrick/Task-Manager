import React from 'react'

const Tasks = ({tasks, title}) => {
  return (
    <div className='home'>
        <h2>{title}</h2>
        {tasks.map((task) => (
          <div className='blog-preview' key={task.id}>
              <h2>{task.title} <button className='btn'>Delete task</button></h2>
              <p>{task.body}</p>
             </div>
        ))}
    </div>
  )
}

export default Tasks
import React, { useState, useEffect } from 'react'

function Index() {
  let url = 'http://127.0.0.1:8000/json/response'

  const [task, setTask] = useState([]);

    useEffect(() => {


        fetch(url)
        .then(res => res.json())
        .then(data => setTask(data))
        .then(mss => console.log(mss))

    }, []);

  return (
    <div>

      <h1>HOLAAAA</h1>

      {task.map(int => {
        return(
          <div key={int.id}>
            <h1>{int.Task}</h1>
          </div>
        )
      })}

    </div>
  )
}

export default Index

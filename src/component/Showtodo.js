import React from 'react'

function showtodo(props) {
  return (
    <div className='container'>
        <div className="row my-2">
            <div className="col-6">
                <h6>{props.task}</h6>
            </div>
            <div className="col-6">
                <button onClick={()=>{props.onSelect(props.id)}}>X</button>
            </div>

        </div>
      
    </div>
  )
}

export default showtodo

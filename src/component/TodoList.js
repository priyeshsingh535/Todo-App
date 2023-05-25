import React,{useState} from 'react'
import './todo.css'
import Showtodo from './Showtodo'

function TodoList() {
const [task,setTask]=useState("Add some task")
const [data,setData]= useState([])

const handleonChange=(e)=>{
setTask(e.target.value)
}

const handleonSubmit=(e)=>{
    e.preventDefault();
    const newData=task;
    setData([...data,newData])
    setTask('')
}
const deleteItem=(a)=>{
    const finalData=data.filter((currElemt,index)=>{
        return index!==a
    })
    setData(finalData)
}
  return (
  <div className="container">
    <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
            <div className="row bg-primary text-white">
                <div className="col p-2">
                    <h4 className="text-center"> TODO LIST</h4>
                </div>
            </div>
            <form onSubmit={handleonSubmit}>
                <div className="row justify-content-between text-white p-2">
                    <div className="form-group flex-fill mb-2 col-9">
                        <input type="text" id="todo-input" className="form-control" value={task} onChange={handleonChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 ml-3 col-3">Add Todo</button>
                </div>
            </form>
            {
                data.map((value,index)=>(
                    <Showtodo  key={index} id={index} task={value} onSelect={deleteItem}/>

                ))
            }
        </div>
    </div>
  </div>
  )
}

export default TodoList

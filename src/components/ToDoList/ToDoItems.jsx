import { bin, check, empty } from "../../assets/export"

const ToDoItems = ({text,id,isComplete,toggle,deleteTodo}) => {
  return (
    <div className="flex items-center my-3 gap-2 ">
      <div onClick={()=>{toggle(id)}}  className="flex flex-1 items-center flex-row cursor-pointer ">
        <img className="w-7" src={isComplete ? check:empty } alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through':''}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} className="w-4 cursor-pointer " src={bin} alt="" />
    </div>
  )
}

export default ToDoItems

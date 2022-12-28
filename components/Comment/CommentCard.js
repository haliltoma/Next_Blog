import React from 'react'
import { BsTrash } from 'react-icons/bs'

const CommentCard = ({content,key}) => {
  const handleDelete= ()=>{
    console.log(key)
    console.log('halil')
  }
  return (
    <div className=' max-w-[600px] overflow-hidden flex flex-col rounded-3xl p-3 bg-gray-300'>
    <div className="card-header">
      <span>Author:</span>
      <span>Halil</span>
    </div>
    <div className="card-body">
      <p>{content}</p>
    </div>
    <div className="card-footer flex justify-end">
      <BsTrash className="cursor-pointer duration-300 hover:fill-red-400" onClick={handleDelete()} fill="red" fontSize='25px'/>
    </div>
  </div>
  )
}

export default CommentCard
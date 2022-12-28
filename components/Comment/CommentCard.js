import React from 'react'
import { BsTrash } from 'react-icons/bs'

const CommentCard = ({content}) => {
  return (
    <div className='dasdasd'>
      <div className="card-header">
        <span>Author:</span>
        <span>Halil</span>
      </div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <BsTrash/>
      </div>
    </div>
  )
}

export default CommentCard
import React,{useState} from 'react'
import CommentCard from './CommentCArd';

const Comment = () => {
    const [value, setValue] = useState("");
    const [comment, setComment] = useState(['exa'])
    const commentHandleClick = () => {
        if(value == ''){
         return console.log('error commment empty')
        }else{
          setComment([...comment,value])
          setValue('')
        }
      }
  return (
    <>
      <section className="comment my-24 flex flex-col items-center">
        <label htmlFor="comment" className="font-semibold my-5 text-3xl">
          Comments
        </label>
        <textarea
          name="comment"
          id="comment"
          cols="100"
          rows="3"
          className="rounded-3xl text-xl w-full p-3 border-x-4 focus-visible:outline-none focus-visible:border-violet-800 resize-none border-gray-500 bg-gray-200"
          onChange={(e)=>setValue(e.target.value)}
          value={value}
        ></textarea>
  {value}
  {JSON.stringify(comment)}
        <span className="p-2 px-4 items-end m-3 self-end  border active:border active:border-yellow-500 rounded-3xl text-white cursor-pointer hover:bg-amber-900 hover: bg-amber-600"
        onClick={()=>commentHandleClick()}
        >
          Add
        </span>
      </section>
      <section className="comments">
      {comment &&
        comment.map((item,i)=>(
            <span key={i}>{item}</span>
         
        ))
      }
      {/* <CommentCard
            content={item}
            key={i}
          /> */}
          
      </section>
    </>
  )
}

export default Comment
import React, { useState } from "react";
import dynamic from "next/dynamic";
const CommentCard = dynamic(()=>import('./CommentCard'),{
  loading: () => "Loading...",
    ssr: false,
})

const Comment = () => {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState([]);
  const commentHandleClick = () => {
    if (value == "") {
      return console.log("error comment empty");
    } else {
      setComment([...comment, value]);
      setValue("");
    }
  };
  const handlePressEnter = (e) => {
    if (e.code == "Enter") {
      commentHandleClick();
    }
  };
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
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={handlePressEnter}
        ></textarea>
        <span
          className="p-2 px-4 items-end m-3 self-end  border active:border active:border-yellow-500 rounded-3xl text-white cursor-pointer hover:bg-amber-900 hover: bg-amber-600"
          onClick={() => commentHandleClick()}
        >
          Add
        </span>
      </section>
      <section className="comments">
        {comment.map((item, i) => <CommentCard key={i} content={item} />)}
      </section>
    </>
  );
};

export default Comment;

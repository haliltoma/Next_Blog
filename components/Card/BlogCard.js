import Image from 'next/image'
import React from 'react'

const BlogCard = ({image,content,title,author}) => {
    console.log(author == typeof Object)
  return (
    <article className='flex min-h-[300px]'>
        <div className="card-header w-40">
            <Image src={image} alt={title}/>
        </div>
        <div className="card-body">
            <h2>{title}</h2>
            <p>{content}</p>
            <div className="author">
                { author == typeof Object &&
                    author.map((item,i)=>(
                        <span key={i}>{item}</span>
                    ))
                }
            </div>
        </div>
    </article>
  )
}

export default BlogCard
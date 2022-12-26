import Image from 'next/image'
import React from 'react'


const CardSm = ({image,title,author}) => {
  return (
    <article className='card w-52 p-4 border'>
        <div className="card-header  h-52 rounded-md overflow-hidden hover:rounded-2xl duration-300">
            <Image className='object-cover h-full w-full'  src={image} alt={`${title}-${author}`}/>
        </div>
        <div className="card-body  p-1 ">
            <h3 className='mb-3 font-black tracking-wide'>{title}</h3>
            <p>{author}</p>
        </div>
    </article>
  )
}

export default CardSm
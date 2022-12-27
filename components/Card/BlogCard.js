import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTags } from "react-icons/bs";

const BlogCard = ({ image, content, title, author, tags,link }) => {
  return (
    <article className="flex h-[400px] gap-3 p-5">
      <figure className="card-header w-[50%] h-full overflow-hidden rounded-2xl hover:rounded-3xl">
        <Image
          className="object-cover w-full h-full"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body justify-between flex flex-col w-[50%] p-4 rounded-2xl border ">
        <div className="tags mb-3">
        
          {tags.map((item, i) => (
            <span className="p-2 rounded-3xl bg-amber-500 text-white mr-2" key={i}>{item}</span>
          ))}
        </div>
        <h2 className="mb-3 font-black text-3xl line-clamp-2">{title}</h2>
        <p className="line-clamp-3 mb-3">{content}</p>
        <div className="author">
        <span className="p-2 rounded-3xl bg-blue-900 text-white mr-2">Author</span>
          {author && author.map((item, i) => <span  className="p-2 bg-lime-600 mr-2 rounded-3xl text-amber-100 font-bold" key={i}>{item}</span>)}
        </div>
        <div className="flex justify-end">
        <Link href={`blogs/${link}`} className=" p-2 align-end rounded-3xl   bg-blue-400">More than...</Link>
        
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

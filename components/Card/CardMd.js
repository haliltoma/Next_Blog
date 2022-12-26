import Image from "next/image";
import React from "react";

const CardMd = ({ image, content, title, author }) => {
  return (
    <article className="border rounded-xl p-3 flex flex-col w-96 min-h-[400px]">
      <div className="card-head w-full h-80 overflow-hidden rounded-2xl hover:rounded-3xl duration-300 ">
        <Image
          className="object-cover min-w-full min-h-full hover:scale-105 duration-300"
          src={image}
          alt={title}
        />
      </div>
      <div className="card-body py-3">
        <h3 className="font-black text-xl mb-3">{title}</h3>
        <p className="font-semibold text-gray-700 text-base mb-3">{content}</p>
        <div className="author my-3">
          {author && author.map((item, i) => (
            <span
              className="px-2 mr-2 py-1 rounded-3xl font-bold bg-orange-400"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CardMd;

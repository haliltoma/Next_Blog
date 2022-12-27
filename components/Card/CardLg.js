import React from "react";
import Image from "next/image";

const CardLg = ({ image, tags, title, content ,author}) => {
  return (
    <div className="max-w-[1200px] flex justify-center gap-5">
      <div className="blog-img flex justify-center overflow-hidden w-[50%] h-96">
        <Image
          className="object-cover rounded-xl hover:rounded-2xl min-w-[100%] min-h-[100%] duration-300"
          src={image}
          alt="creative"
        />
      </div>
      <div className="blog-content w-[50%] p-4 border rounded-2xl">
        <div className="tags mb-8">
          {tags.map((item, i) => (
            <span
              className="mr-2 px-3 py-2 rounded-xl bg-slate-200 text-slate-800 font-bold"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="blog-main-title mb-6 font-black text-5xl">{title}</h3>
        <p className="font-semibold mb-6">{content}</p>
        <div className="author">
          {author.map((item, i) => (
            <span
              className="mr-2 rounded-md bg-amber-400 text-stone-800 px-3 py-2 font-semibold "
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLg;

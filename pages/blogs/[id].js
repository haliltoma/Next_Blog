import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import CardLg from "../../components/Card/CardLg";
import image from "../../public/assets/images/photo2.jpeg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Comment from "../../components/Comment/Comment";

const JoditEditor = dynamic(
  () => import("../../components/Jodit/JoditEditor"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);
const BlogItem = ({ val, params }) => {
  return (
    <main className="w-full my-4 flex flex-col items-center">
      <section className="container flex justify-center">
        {val && (
          <CardLg
            title={val.title}
            image={image}
            content={val.content}
            tags={val.tags}
            author={val.author}
          />
        )}
      </section>
      <section className="container my-8 flex justify-center">
        {" "}
        <p>{val.description}</p>
      </section>
      <section className="socials flex gap-4">
        <Link
          href="#"
          className="hover:bg-slate-900 duration-300 p-3 rounded-full bg-slate-700 "
        >
          <BsInstagram className="fill-white hover:fill-slate-300 duration-300" />
        </Link>
        <Link
          href="#"
          className="hover:bg-slate-900 duration-300 p-3 rounded-full bg-slate-700 "
        >
          <BsFacebook className="fill-white hover:fill-slate-300 duration-300" />
        </Link>
        <Link
          href="#"
          className="hover:bg-slate-900 duration-300 p-3 rounded-full bg-slate-700 "
        >
          <BsTwitter className="fill-white hover:fill-slate-300 duration-300" />
        </Link>
      </section>
      <Comment/>
    </main>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  const val = data[params.id];
  console.log(params.id);
  return {
    props: {
      val,
      params,
    },
  };
}

export default BlogItem;

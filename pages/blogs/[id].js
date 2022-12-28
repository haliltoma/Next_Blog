import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import CardLg from "../../components/Card/CardLg";
import image from "../../public/assets/images/photo2.jpeg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Comment from "../../components/Comment/Comment";
import { BsTrash } from 'react-icons/bs'


const JoditEditor = dynamic(
  () => import("../../components/Jodit/JoditEditor"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);
const BlogItem = ({ data, params }) => {
  const router = useRouter();
  const dataOne = data[router.query.id];

  

  return (
    <main className="w-full my-4 flex flex-col items-center">
      <section className="container flex justify-center">
        {
          <CardLg
            title={dataOne.title}
            image={image}
            content={dataOne.content}
            tags={dataOne.tags}
            author={dataOne.author}
          />
        }
      </section>
      <section className="container my-8 flex justify-center">
        <p>{dataOne.description}</p>
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
      <Comment >
        
      </Comment>
      {/* <div className=' max-w-[600px] overflow-hidden flex flex-col rounded-3xl p-3 bg-gray-300'>
      <div className="card-header">
        <span>Author:</span>
        <span>Halil</span>
      </div>
      <div className="card-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate, qui inventore aspernatur nemo excepturi assumenda ipsam dolores, nam, voluptatum deserunt illum perspiciatis. Aperiam pariatur officia voluptate doloribus, repudiandae explicabo distinctio alias quia iusto necessitatibus, temporibus est veniam. Optio accusantium provident aspernatur mollitia eveniet nulla similique recusandae quisquam temporibus quia!</p>
      </div>
      <div className="card-footer flex justify-end">
        <BsTrash className="cursor-pointer duration-300 hover:fill-red-900" onClick={handleDelete()} fill="red" fontSize='25px'/>
      </div>
    </div> */}
    </main>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/blogs/`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default BlogItem;

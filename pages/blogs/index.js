import React, { useState } from "react";
import BlogCard from "../../components/Card/BlogCard";
import image1 from '../../public/assets/images/photo.jpeg';
import image2 from '../../public/assets/images/photo2.jpeg';
import image3 from '../../public/assets/images/photo3.jpeg';
import image4 from '../../public/assets/images/photo4.jpg';

const index = ({ data }) => {
  const [photo,setPhoto]=useState([image1,image2,image3,image4])
  return (
    <main className="container flex justify-center">
    <section className="w-[90%] flex gap-5 flex-col ">
      {data && data.map((item, index) => (
        <BlogCard
          key={index}
          title={item.title}
          content={item.content}
          author={item.author}
          image={photo[index % 4]}
          tags={item.tags}
          link={index}
        />
      ))}
      </section>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default index;

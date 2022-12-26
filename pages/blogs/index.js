import React from "react";
import BlogCard from "../../components/Card/BlogCard";
import image from '../../public/assets/images/photo.jpeg';

const index = ({ data }) => {
  return (
    <main>
      {data.map((item, index) => (
        <BlogCard
          key={index}
          title={item.title}
          content={item.content}
          author={item.author}
          image={image}
        />
      ))}
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res;
  return {
    props: { data },
  };
}

export default index;

import Image from "next/image";
import React from "react";

const Event = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Event;



export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const { allEvents } = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}


export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: { data: eventData },
  };
}
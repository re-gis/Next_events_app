import Image from "next/image";
import React from "react";

const index = ({ data }) => {
  return (
    <div>
      <h1>Events in london</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image src={ev.image} width={300} height={300} alt={ev.title} />
            <h1>{ev.title}</h1>
            <p>{ev.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default index;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data },
  };
}

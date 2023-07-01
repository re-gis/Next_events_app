import Image from "next/image";
import React from "react";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image alt={ev.title} width={300} height={300} src={ev.image} />
            <h2>{ev.title}</h2>
          </a>
        ))}
       
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

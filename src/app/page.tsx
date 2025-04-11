"use client";

import React from "react";

type Item = {
  title: string;
  description: string;
  price: number;
  image: string;
};

function Card(props: { items: Item[] }) {
  return (
    <div className="cardgrid">
      {props.items.map((item, index) => (
        <div key={index} className="card">
          <div className="image">
          <img src={item.image} alt={item.title} className="image"/>
          </div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      </div>
  );
}

function item() {
  const items= [
    { title: "Mountain View", description: "A beautiful mountain.", price: 50, image: "https://picsum.photos/200/300?random=1" },
    { title: "City Lights", description: "A bustling city at night.", price: 70, image: "https://picsum.photos/200/300?random=2" },
    { title: "Ocean Breeze", description: "Relax by the ocean.", price: 100, image: "https://picsum.photos/200/300?random=3" },
    { title: "Forest Escape", description: "A tranquil forest scene.", price: 40, image: "https://picsum.photos/200/300?random=4" },
    { title: "Desert Sunset", description: "A stunning desert sunset.", price: 60, image: "https://picsum.photos/200/300?random=5" },
  ];

  return (
    <div className="container">
      <Card items={items} />
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .cardgrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .card {
          border: 1px solid #ccc;
          padding: 0px;
          border-radius: 8px;
          text-align: center;
        }
        .image {
          width: 100%;
          height: auto;
        }
            `}</style>     
    </div>
  );
}

export default item;
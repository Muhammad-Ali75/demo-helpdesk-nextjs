import React from "react";

async function getTicketsData() {
  const res = await fetch("http://localhost:4000/tickets",{
    next:{
        revalidate: 0
    }
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTicketsData();

  return (
    <>
      {tickets.map(({ id, title, body, priority }) => (
        <div key={id} className="card my-5">
          <h3>{title}</h3>
          <p>{body.slice(0, 200)}...</p>
          <div className={`pill ${priority}`}>{priority} priority</div>
        </div>
      ))}
      {!tickets.length && (
        <p className="text-center">There are no open tickets.</p>
      )}
    </>
  );
}

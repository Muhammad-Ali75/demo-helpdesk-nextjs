import React from 'react'

async function getTicketData(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
      next:{
          revalidate: 60
      }
    });
    return res.json();
  }

export default async function TicketDetail({params:{id}}) {
    const { title, body, priority }= await getTicketData(id)
  return (

    <main>
        <nav>
            <h2>Ticket Detail</h2>
        </nav>
    <div className="card">
    <h3>{title}</h3>
    <p>{body}</p>
    <div className={`pill ${priority}`}>{priority} priority</div>
  </div>
  </main>
  )
}

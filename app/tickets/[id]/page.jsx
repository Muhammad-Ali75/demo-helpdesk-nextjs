import React from 'react'
import { notFound } from "next/navigation"

export const dynamicParams=true

export async function generateStaticParams(){
    const res= await fetch('http://localhost:4000/tickets');
    const tickets = await res.json() ;
    return tickets.map(({id})=>{id});
}

async function getTicketData(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
      next:{
          revalidate: 60
      }
    });
    if(!res.ok){
      notFound();
    }
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

import React from "react";
import TicketList from "./TicketList";

export default function Ticket() {
  return (
    <main>
      <nav>
        <h2>Ticket</h2>
        <p>
          <small>Currently open tickets.</small>
        </p>
      </nav>
      <TicketList />
    </main>
  );
}

import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Ticket() {
  return (
    <main>
      <nav>
        <h2>Ticket</h2>
        <p>
          <small>Currently open tickets.</small>
        </p>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

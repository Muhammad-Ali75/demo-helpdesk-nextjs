"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [{ title, body, priority, isLoading }, setFormState] = useState({
    title: "",
    body: "",
    priority: "low",
    isLoading: false,
  });

  function handleFormState(key, value) {
    setFormState((preValue) => {
      return { ...preValue, [key]: value };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFormState("isLoading", true);

    const newTicket = {
      title,
      body,
      priority,
      user_email: "mario@netninja.dev",
    };

    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => handleFormState("title", e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={(e) => handleFormState("body", e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) => handleFormState("priority", e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}

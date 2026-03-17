import React from "react";
import { useState } from "react";

function AddPosts() {
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const url = import.meta.env.VITE_POSTS_URL;
    const token = localStorage.getItem("token");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, lead, content }),
    });

    const data = await response.json();
  };
  return (
    <div>
      <h2>Dodaj post</h2>
      <form>
        <label>
          Tytuł{" "}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
          />
        </label>

        <label>
          Lead{" "}
          <input
            type="text"
            onChange={(e) => setLead(e.target.value)}
            value={lead}
            id="lead"
          />
        </label>

        <label>
          Treść{" "}
          <input
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="content"
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddPosts;

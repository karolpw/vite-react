import React from "react";
import { useState } from "react";
import './add-post.css'

function AddPosts({ onClose }) {
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/posts`, {
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
    <div className="add-post">
      <h2 className="add-post_title">Dodaj post</h2>
      <form className="add-post_form">
        <div className="add-post_field">
          <label className="add-post_label">Tytuł</label>
          <input
            type="text"
            className="add-post_input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="add-post_field">
          <label className="add-post_label">Lead</label>
          <input
            type="text"
            className="add-post_input"
            onChange={(e) => setLead(e.target.value)}
            value={lead}
          />
        </div>

        <div className="add-post_field">
          <label className="add-post_label">Treść</label>
          <textarea
            className="add-post_textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        <button type="button" onClick={handleSubmit} className="add-post_submit">
          Dodaj
        </button>
        <button type="button" onClick={onClose} className="add-post_back">
          Wróć
        </button>
      </form>
    </div>
  );
}

export default AddPosts;

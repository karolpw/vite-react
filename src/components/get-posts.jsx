import React from "react";
import { useState, useEffect } from "react";
import "./get-posts.css";

function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [openPostId, setOpenPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const timeAgo = (dateString) => {
    //pomoc z chatgpt
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / 1000); // różnica w sekundach

    if (diff < 60) return "przed chwilą";
    if (diff < 3600) return `${Math.floor(diff / 60)} min temu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h temu`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} dni temu`;
    return `${Math.floor(diff / 2592000)} mies. temu`;
  };

  if (openPostId != null) {
    const post = posts.find((p) => p.id === openPostId);
    return (
      <div className="post-view">
        <button onClick={() => setOpenPostId(null)} className="post-view_back">← Wróć</button>
        <h2 className="post-view_title">{post.title}</h2>
        <p className="post-view_lead">{post.lead}</p>
        <p className="post-view_content-label">Treść</p>
        <p className="post-view_content">{post.content}</p>
      </div>
    );
  }

  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <p className="post-card_category">Kategoria</p>
          <h2 className="post-card_title">{post.title}</h2>
          <p className="post-card_lead">{post.lead}</p>
          <p className="post-card_meta">{timeAgo(post.createdAt)}</p>
          <span
            className="post-card_link"
            onClick={() => setOpenPostId(post.id)}
          >
            Czytaj dalej
          </span>
        </div>
      ))}
    </div>
  );
}

export default GetPosts;

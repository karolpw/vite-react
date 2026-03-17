import React from "react";
import { useState, useEffect } from 'react';

function GetPosts() {
    const [posts, setPosts] = useState([]);
    const [wholePost, setWholePost] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(import.meta.env.VITE_POSTS_URL);
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    const showPost = async (id) => {
        setOpenPostId(id);
    }

    return(
        <>
        {openPostId === null ? (
            posts.map((post) => (
                <div key={post.id} className="BlogBox">
                    <h2>{post.title}</h2>
                    <p>{post.lead}</p>
                    <p onClick={() => showPost(post.id)}>Czytaj dalej</p>
                </div>
            ))
        ) : (
            posts.filter((post) => post.id === openPostId)
            .map((post) =>(
                <div key={post.id} className="BlogBox">
                    <h2>{post.title}</h2>
                    <p>{post.lead}</p>
                    <p>{post.content}</p>

                    <button onClick={() => setOpenPostId(null)}>Wróć</button>
                </div>
            ))
        )}
        </>
    )

}

export default GetPosts;
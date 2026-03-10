import React from 'react';
import { useState } from 'react'

function btnGet(){
    const [hasAction, setHasAction] = useState(false);

    const [posts, setPosts] = useState([]);
    
    const handleClick =async () =>{
        setHasAction(true)
    
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        setPosts(data);

        setTimeout(() => {
            setHasAction(false)
        }, 100) 
    }

    return(
        <>
            <button onClick={handleClick} className={hasAction ? "buttonAction" : ""}> Wyślij get do bazy danych</button>
            <table>
                {posts.length > 0 ? (
                    <tr>
                        <th>title</th>
                        <th>lead</th>
                        <th>content</th>
                    </tr>
                ) : ""}
                
                {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.lead}</td>
                            <td>{post.content}</td>
                        </tr>
                ))}
            </table>
        </>
    )
}

export default btnGet;
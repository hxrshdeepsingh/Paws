"use client"

import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Post({ params }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:2222/api/posts/${params.id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            {post && (
                <div>
                    <h2>{post.name}</h2>
                    <p>{post.description}</p>
                </div>
            )}
        </>
    );
}

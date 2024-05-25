"use client"

import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Post({ params }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:2222/api/posts/${params.id}`)
            .then(response => {
                setPost(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            {post && (
                <div key={post.postId}>
                    <h2>{post.name}</h2>
                    <p>{post.email}</p>
                    <p>{post.age}</p>
                    <p>{post.date}</p>
                    <p>{post.species}</p>
                    <p>{post.weight}</p>
                    <p>{post.vaccinated}</p>
                    <p>{post.address}</p>
                    <p>{post.state}</p>
                    <p>{post.gender}</p>
                    <p>{post.number}</p>
                    <p>{post.username}</p>
                    <p>{post.description}</p>
                </div>
            )}
        </>
    );
}


// age
// : 
// "0"
// breed
// : 
// "dog"
// description
// : 
// ""
// email
// : 
// "x.gangster.v1@gmail.com"
// gender
// : 
// "male"
// name
// : 
// "zeus"
// number
// : 
// "+91 96809-66795"
// postId
// : 
// "009ff05d-15e0-40fc-89cc-4c4a6141e5ab"
// userId
// : 
// "4bf8933b-ab77-4619-ba40-13bc1cb5cf25"
// username
// : 
// "hxrshdeep singh"
// __v
// : 
// 0
"use client"

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
            <div className="container min-h-screen w-full md:w-3/4 mx-auto py-5">
                <h1 className="text-3xl font-bold mb-5">All Paws near you</h1>
                <hr className="h-6 w-full my-6" />

                <div className="flex flex-col gap-5">
                    {post && (
                        <div key={post.postId}>
                            <div className="gap-5 shadow-lg p-5 rounded-xl flex flex-col md:flex-row">
                                <div className="flex flex-col justify-between gap-3 object-cover">
                                    <Image src="/assets/w.webp" alt="sdsdsds" objectFit="cover" width={300} height={300} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">{post.title}</h2>
                                    <p className="mt-2">Meet {post.name}</p>
                                    <p className="mt-2">{post.type}</p>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

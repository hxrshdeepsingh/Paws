"use client";

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest("http://localhost:2222/api/posts/all");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.name}</h2>
                    <p>{post.age}</p>
                    <p>{post.date}</p>
                    <p>{post.species}</p>
                    <p>{post.weight}</p>
                    <p>{post.gender}</p>
                    <p>{post.description}</p>
                    <Button>
                        <Link href={`/posts/${post.postId}`}>Check</Link>
                    </Button>
                </div>
            ))}
        </>
    );
}

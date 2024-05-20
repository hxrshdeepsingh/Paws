'use client';

import { getRequest } from "../../../lib/api";
import { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function UserPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const UIS = localStorage.getItem("userInfo");
        if (UIS) {
            const userInfo = JSON.parse(UIS);
            const url = `http://localhost:2222/api/posts/userPosts/${userInfo.public_id}`;

            async function fetchUserPosts(url) {
                try {
                    const response = await getRequest(url);
                    setPosts(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUserPosts(url);
        }
    }, []);

    return (
        <div className="container py-5 flex justify-center flex-col items-center">
            {posts.map((post, index) => (
                <div key={index}>
                    <div className="gap-5 shadow-lg p-5 rounded-xl flex flex-col md:flex-row">
                        <div className="flex flex-col justify-between gap-3 object-cover">
                            <Image src="/assets/w.webp" alt="sdsdsds" objectFit="cover" width={300} height={300} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">title</h2>
                            <p className="mt-2">Meet {post.name}</p>
                            <p className="mt-2">Cat</p>
                            <p>{post.description}</p>
                            <Button>
                                <Link href={`/posts/${post.postId}`}>Check</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
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
            <div className="container w-full md:w-3/4  mx-auto  py-5">
                <h1 className="text-3xl font-bold mb-5">All Paws near you</h1>
                <hr className="h-6 w-full my-6" />

                <div className="flex flex-col gap-5">
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
            </div>
        </>
    );
}

"use client"

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";
import Link from "next/link";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await getRequest("http://localhost:2222/api/posts/all");
                if (isMounted) {
                    setPosts(response.data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            <div className="container min-h-screen flex flex-col gap-5">
                <h1>All Posts</h1>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    posts.map(post => (
                        <div key={post.postId}>
                            <div className="bg-blue-500">
                                <div>{post.name}</div>
                                <div>{post.description}</div>
                                <Link href={"posts/" + post.postId}>check</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

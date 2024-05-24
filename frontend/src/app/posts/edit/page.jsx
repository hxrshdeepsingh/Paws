'use client';

import Link from "next/link";
import Image from "next/image";
import { getRequest, deleteRequest } from "../../../lib/api";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";

export default function editPost() {
    const [posts, setPosts] = useState([]);
    const { toast } = useToast()
    const { push } = useRouter();

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

    async function deletePost(id) {
        try {
            const url = `http://localhost:2222/api/posts/delete/${id}`;
            const response = await deleteRequest(url);
            if (response) {
                toast({ variant: "default", title: "Post deleted successfully", description: "Wait for redirection!" })
                setTimeout(()=>{
                    push("/posts/edit")
                }, 1000)
            }

        } catch (error) {
            toast({ variant: "destructive", title: "Error occured", description: "Try Again!!!" })
        }
    }

    return (
        <>
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

                            <Button variant="secondary">
                                <Link href={`/posts/edit/${post.postId}`}>Update</Link>
                            </Button>

                            <Button variant="destructive" onClick={() => deletePost(post.postId)}>Delete</Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
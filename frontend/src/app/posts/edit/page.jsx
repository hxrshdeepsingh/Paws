'use client';

import Link from "next/link";
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
        const UIS = localStorage.getItem("userApi");
        if (UIS) {
            const userInfo = JSON.parse(UIS);
            const url = `http://localhost:2222/api/posts/userPosts/${userInfo.public_id}`;
            console.log(url)

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
                setTimeout(() => {
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

                    <Button variant="secondary">
                        <Link href={`/posts/edit/${post.postId}`}>Update</Link>
                    </Button>

                    <Button variant="destructive" onClick={() => deletePost(post.postId)}>Delete</Button>
                </div>
            ))}
        </>
    );
}
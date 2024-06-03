'use client';

import Link from "next/link";
import useLinks from "@/hooks/useLinks";
import { getRequest, deleteRequest } from "../../../lib/api";
import { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

export default function editPost() {
    const [posts, setPosts] = useState([]);
    const links = useLinks();

    useEffect(() => {
        const UIS = localStorage.getItem("userApi");
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
            }

        } catch (error) {
            toast({ variant: "destructive", title: "Error occured", description: "Try Again!!!" })
        }
    }

    return (
        <>
            {posts.map((post, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{post.name}</CardTitle>
                        <CardDescription className="text-gray-700">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row justify-between">
                        <div className="w-full">
                            <p>Age: {post.age}</p>
                            <p>Date: {post.date}</p>
                            <p>Species: {post.species}</p>
                        </div>
                        <div className="w-full">
                            <p>Weight: {post.weight}</p>
                            <p>Gender: {post.gender}</p>
                        </div>
                    </CardContent>
                    <Separator />
                    <CardFooter className="py-2 flex gap-1 flex-wrap">
                        <Button>
                            <Link href={`${links.EXPLORE}/${post.postId}`}>Check</Link>
                        </Button>
                        <Button variant="secondary">
                            <Link href={`${links.POST_MANAGE}/${post.postId}`}>Update</Link>
                        </Button>
                        <Button variant="destructive" onClick={() => deletePost(post.postId)}>Delete</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
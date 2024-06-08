"use client";

import Link from "next/link";
import Links from "@/config/links.json"
import Explore from "@/config/explore.json";

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"


export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest(`${process.env.NEXT_PUBLIC_API_BASE}/api/posts/all`);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 py-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">{Explore.Title}</h1>
                        <h3 className="text-muted-foreground">{Explore.Subtitle}</h3>
                        <Separator className="mt-4" />
                    </div>
                    {posts.map((post, index) => (
                        <Card key={index} className="my-4">
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

                            <CardFooter className="py-2">
                                <Button variant="secondary">
                                    <Link href={`${Links.Explore.Url}/${post.postId}`}>More Info</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </main>
            </div>
        </>
    );
}

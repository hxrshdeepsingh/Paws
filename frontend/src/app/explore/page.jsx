"use client";

import Link from "next/link";
import useLinks from "@/hooks/useLinks";

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"


export default function Posts() {
    const links = useLinks();
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
            <h2>Explore Pets</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam labore doloribus, inventore incidunt ex rerum eligendi. Pariatur voluptas obcaecati veniam reprehenderit cumque, iusto quasi. Magnam atque omnis dolores inventore, quod tempora placeat.</p>

            <Separator className="my-4" />

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
                            <Link href={`${links.EXPLORE}/${post.postId}`}>More Info</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}

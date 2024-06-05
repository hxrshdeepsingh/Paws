"use client"

import axios from 'axios';
import React, { useState, useEffect } from "react";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

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
            {post && (
                <Card>
                    <CardHeader>
                        <CardTitle>{post.name}</CardTitle>
                        <CardDescription>
                            <p>Owner Name : {post.username}</p>
                            <p>{post.description}</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row justify-between">
                        <div className="w-full">
                            <p>Age: {post.age}</p>
                            <p>Date: {post.date}</p>
                            <p>Species: {post.species}</p>
                        </div>
                        <div className="w-full">
                            <p>Weight: {post.weight}</p>
                            <p>Vaccinated: {post.vaccinated}</p>
                            <p>Gender: {post.gender}</p>
                        </div>
                    </CardContent>
                    <Separator />
                    <CardFooter className="py-2 flex flex-col md:flex-row justify-between">
                        <div className='w-full'>
                            <p>{post.email}</p>
                            <p>{post.number}</p>
                        </div>
                        <div className='w-full'>
                            <p>{post.address} | {post.state}</p>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
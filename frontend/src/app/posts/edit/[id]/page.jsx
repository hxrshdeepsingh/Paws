"use client"

import axios from 'axios';
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { putRequest } from "../../../../lib/api"
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import { useForm } from 'react-hook-form';

export default function Post({ params }) {
    const [post, setPost] = useState(null);
    const { toast } = useToast()
    const { push } = useRouter();
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:2222/api/posts/${params.id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    async function onSubmit(data) {
        try {
            const response = await putRequest("http://localhost:2222/api/posts/update", data);
            if (response) {
                toast({ variant: "default", title: "Post updated succesfully!", description: "Wait for redirection" });
                setTimeout(() => {
                    push('/posts/edit');
                }, 1000)
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error occurred", description: "Try again!!!" });
        }
    };

    return (
        <>
            {post && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="sm:w-[380px]">
                        <CardHeader>
                            <CardTitle>Create Posts</CardTitle>
                            <CardDescription> Create a new post to share your ideas, stories, or questions with our community.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="capitalize" htmlFor="name">Pet's name</Label>
                            <Input {...register("name")} type="text" id="name" value={post.name} placeholder="Enter your pet name here..." />

                            <Label className="capitalize" htmlFor="age">Pet's age</Label>
                            <Input {...register("age")} type="number" id="age" value={post.age} placeholder="Enter your pet's age here..." />

                            <Label className="capitalize" htmlFor="gender">Pet's gender</Label>
                            <Select value={post.gender} onValueChange={(value) => setValue("gender", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your pet's gender..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="male">Male</SelectItem>
                                </SelectContent>
                            </Select>

                            <Label className="capitalize" htmlFor="breed">Pet's breed</Label>
                            <Input {...register("breed")} type="text" id="breed" value={post.breed} placeholder="Enter your pet's breed here..." />

                            <Label htmlFor="description">Tell About your pets</Label>
                            <Textarea {...register("description")} id="description" rows="7" value={post.description} placeholder="Enter your description here..."></Textarea>

                        </CardContent>
                        <CardFooter>
                            <Button type="submit">Submit</Button>
                        </CardFooter>
                    </Card>
                </form>
                // <div key={post.postId}>
                //     <div className="gap-5 shadow-lg p-5 rounded-xl flex flex-col md:flex-row">
                //         <div className="flex flex-col justify-between gap-3 object-cover">
                //             <Image src="/assets/w.webp" alt="sdsdsds" objectFit="cover" width={300} height={300} />
                //         </div>
                //         <div>
                //             <h2 className="text-xl font-semibold">{post.title}</h2>
                //             <p className="mt-2">Meet {post.name}</p>
                //             <p className="mt-2">{post.type}</p>
                //             <p>{post.description}</p>
                //         </div>
                //     </div>
                // </div>
            )}
        </>
    );
}

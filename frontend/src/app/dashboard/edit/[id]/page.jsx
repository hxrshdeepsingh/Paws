"use client";

import axios from 'axios';
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { putRequest } from "../../../../lib/api";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from 'react-hook-form';

export default function Post({ params }) {
    const [post, setPost] = useState(null);
    const { toast } = useToast();
    const { register, handleSubmit, setValue, reset } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:2222/api/posts/${params.id}`)
            .then(response => {
                setPost(response.data);
                reset(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [params.id, reset]);

    async function onSubmit(data) {
        try {
            const reqData = {
                "data": data,
                "postId": params.id
            }
            const response = await putRequest("http://localhost:2222/api/posts/update", reqData);
            if (response) {
                toast({ variant: "default", title: "Post updated successfully!", description: "Wait for redirection" });
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error occurred", description: "Try again!!!" });
        }
    };

    return (
        <>
            {post && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Update Post</CardTitle>
                            <CardDescription>Update your post to share new ideas, stories, or questions with our community.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="capitalize" htmlFor="name">Pet's name</Label>
                            <Input {...register("name")} type="text" id="name" placeholder="Enter your pet name here..." />

                            <Label className="capitalize" htmlFor="age">Pet's age</Label>
                            <Input {...register("age")} type="number" id="age" placeholder="Enter your pet's age here..." />

                            <Label className="capitalize" htmlFor="species">Pet's species</Label>
                            <Input {...register("species")} type="text" id="species" placeholder="Enter your pet's species here..." />

                            <Label className="capitalize" htmlFor="weight">Pet's weight</Label>
                            <Input {...register("weight")} type="text" id="weight" placeholder="Enter your pet's weight here..." />

                            <Label className="capitalize" htmlFor="breed">Pet's breed</Label>
                            <Input {...register("breed")} type="text" id="breed" placeholder="Enter your pet's breed here..." />

                            <Label className="capitalize" htmlFor="vaccinated">Is your pet vaccinated?</Label>
                            <Select onValueChange={(value) => setValue("vaccinated", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select yes/not..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>

                            <Label className="capitalize" htmlFor="gender">Pet's gender</Label>
                            <Select defaultValue={post.gender} onValueChange={(value) => setValue("gender", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your pet's gender..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="male">Male</SelectItem>
                                </SelectContent>
                            </Select>

                            <Label htmlFor="description">Tell About your pets</Label>
                            <Textarea {...register("description")} id="description" rows="7" placeholder="Enter your description here..."></Textarea>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit">Submit</Button>
                        </CardFooter>
                    </Card>
                </form>
            )}
        </>
    );
}

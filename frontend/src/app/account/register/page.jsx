"use client"
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {postRequest} from "../../../lib/api"

export default function register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await postRequest("http://localhost:2222/api/posts/all", data);
            console.log(response);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    return (
        <>
            <div className="container py-5">
                <h1>Register</h1>

                <form onSubmit={handleSubmit(onSubmit)}>=
                    <Label className="capitalize" htmlFor="name">Pet's name</Label>
                    <Input {...register("petname")} type="text" id="name" placeholder="Enter your pet name here..." />

                    <Label className="capitalize" htmlFor="age">Pet's age</Label>
                    <Input {...register("petage")} type="number" id="age" placeholder="Enter your pet's age here..." />

                    <Button className="mt-10" type="submit">Submit</Button>
                </form>
            </div>
        </>
    )
}
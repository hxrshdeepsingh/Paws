"use client"
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {postRequest} from "../../../lib/api"

export default function login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await postRequest("http://localhost:2222/api/account/signin", data);
            console.log(response);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    return (
        <>
            <div className="container py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label className="capitalize" htmlFor="email">Email Address</Label>
                    <Input {...register("email")} type="text" id="email" placeholder="Enter your email address..." />

                    <Label className="capitalize" htmlFor="password">Your password</Label>
                    <Input {...register("password")} type="password" id="password" placeholder="Enter your password..." />

                    <Button className="mt-10" type="submit">Submit</Button>
                </form>
            </div>
        </>
    )
}
"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Cookies from 'js-cookie';
import { refresh } from "@/lib/refresh";

import { useForm } from 'react-hook-form';
import { postRequest } from "../../../lib/api"
import { useRouter } from 'next/navigation';


export default function login() {
    const { toast } = useToast()
    const { push } = useRouter();
    const { register, handleSubmit } = useForm();

    async function launchToast(variant, title, description) {
        toast({
            variant: variant,
            title: title,
            description: description,
        })
    }

    async function onSubmit(data) {
        try {
            const response = await postRequest(`${process.env.NEXT_PUBLIC_API_BASE}/api/account/signin`, data);
            const token = response.data.token;
            Cookies.set('pjwt', token, { expires: 7 });
            localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            localStorage.setItem("userApi", JSON.stringify(response.data.user));
            launchToast("", "Account created succesfully!", "Wait for redirection");
            setTimeout(() => {
                refresh('/explore');
            }, 1000)

        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data?.message || "Please try again";
            launchToast("destructive", "Error occurred", errorMessage);
        }
    };
    return (
        <>
            <div className="container min-h-screen py-5 flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="sm:w-[380px]">
                        <CardHeader>
                            <CardTitle>Login Account</CardTitle>
                            <CardDescription>Please enter your username and password to access your account:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="capitalize" htmlFor="email">Email Address</Label>
                            <Input {...register("email")} type="text" id="email" placeholder="Enter your email address..." />

                            <Label className="capitalize" htmlFor="password">Your password</Label>
                            <Input {...register("password")} type="password" id="password" placeholder="Enter your password..." />
                        </CardContent>
                        <CardFooter>
                            <Button className="mt-10" type="submit">Submit</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </>
    )
}
"use client"

import Cookies from 'js-cookie';
import { refresh } from '@/lib/refresh';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from 'react-hook-form';
import { postRequest } from "../../../lib/api";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
    const { toast } = useToast();
    const { push } = useRouter();
    const { register, handleSubmit, watch } = useForm();

    async function launchToast(variant, title, description) {
        toast({
            variant: variant,
            title: title,
            description: description,
        });
    }

    async function onSubmit(data) {
        try {
            const formData = new FormData();

            for (const key in data) {
                if (key !== "file") {
                    formData.append(key, data[key]);
                }
            }
            const file = watch("file")[0]; 
            if (file) {
                formData.append("file", file);
            }
            const response = await postRequest(`${process.env.NEXT_PUBLIC_API_BASE}/api/account/signup`, formData);
            const token = response.data.token;
            if (token) {
                Cookies.set('pjwt', token, { expires: 7 });
                launchToast("", "Account created successfully!", "Wait for redirection");
                localStorage.setItem("userInfo", JSON.stringify(response.data.user));
                localStorage.setItem("userApi", JSON.stringify(response.data.user));
                setTimeout(() => {
                    refresh('/dashboard');
                }, 1000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Please try again";
            launchToast("destructive", "Error occurred", errorMessage);
        }
    }

    return (
        <div className="container py-5 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="sm:w-[380px]">
                    <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>Create your account by filling in the details below</CardDescription>
                    </CardHeader>
                    <CardContent className="capitalize">
                        <Label htmlFor="username">Username</Label>
                        <Input {...register("username")} type="text" id="username" placeholder="Enter your username..." />

                        <Label htmlFor="email">Email</Label>
                        <Input {...register("email")} type="email" id="email" placeholder="Enter your email..." />

                        <Label htmlFor="password">Password</Label>
                        <Input {...register("password")} type="password" id="password" placeholder="Enter your password..." />

                        <Label htmlFor="number">Phone-number</Label>
                        <Input {...register("number")} type="tel" id="number" placeholder="Enter your number..." />

                        <Label htmlFor="address">Address</Label>
                        <Input {...register("address")} type="text" id="address" placeholder="Enter your address..." />

                        <Label htmlFor="state">State</Label>
                        <Input {...register("state")} type="text" id="state" placeholder="Enter state..." />

                        <Label htmlFor="file">File</Label>
                        <Input {...register("file")} type="file" id="file" />
                    </CardContent>
                    <CardFooter>
                        <Button className="mt-10" type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}

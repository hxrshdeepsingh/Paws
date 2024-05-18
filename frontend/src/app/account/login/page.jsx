"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"

import Cookies from 'js-cookie';
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
            const response = await postRequest("http://localhost:2222/api/account/signin", data);
            const token = response.data.token;
            Cookies.set('pjwt', token, { expires: 7 });
            launchToast("", "Account created succesfully!", "Wait for redirection");
            setTimeout(() => {
                push('/posts');
            }, 2000)

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Please try again";
            launchToast("destructive", "Error occurred", errorMessage);
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
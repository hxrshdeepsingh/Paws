"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"

import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { postRequest } from "../../../lib/api"
import { useRouter } from 'next/navigation';

export default function register() {
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
            const response = await postRequest("http://localhost:2222/api/account/signup", data);
            const token = response.data.token;
            if (token) {
                Cookies.set('pjwt', token, { expires: 7 });
                launchToast("", "Account created succesfully!", "Wait for redirection");
                localStorage.setItem("userInfo", JSON.stringify(response.data.user));
                setTimeout(() => {
                    push('/posts');
                }, 1000)
            }

        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data?.message || "Please try again";
            launchToast("destructive", "Error occurred", errorMessage);
        }
    };

    return (
        <>
            <div className="container py-5">
                <h1 className='font-semibold'>Register</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label className="capitalize" htmlFor="email">Your email address</Label>
                    <Input {...register("email")} type="text" id="email" placeholder="Enter your email..." />

                    <Label className="capitalize" htmlFor="password">Enter password</Label>
                    <Input {...register("password")} type="password" id="password" placeholder="Enter your password..." />

                    <Button className="mt-10" type="submit">Submit</Button>
                </form>
            </div>
        </>
    )
}
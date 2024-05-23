"use client"

import { useForm } from 'react-hook-form';
import { putRequest } from "../../lib/api"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function register() {
    const { toast } = useToast()
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
            const response = await putRequest("http://localhost:2222/api/account/update", data);
            if (response){
                launchToast("default", "Updated Succesfully", "");
            }

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Please try again";
            launchToast("destructive", "Error occurred", errorMessage);
        }
    };

    return (
        <>
            <div className="container py-5 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="sm:w-[380px]">
                        <CardHeader>
                            <CardTitle>Update Account</CardTitle>
                            <CardDescription>Update your account by filling in the details below</CardDescription>
                        </CardHeader>
                        <CardContent className="capitalize">

                            <Label htmlFor="username">Enter username</Label>
                            <Input {...register("username")} type="username" id="username" placeholder="Enter your username..." />

                            <Label htmlFor="email">Your email address</Label>
                            <Input {...register("email")} type="text" id="email" placeholder="Enter your email..." />

                            {/* <Label htmlFor="password">Enter password</Label>
                            <Input {...register("password")} type="password" id="password" placeholder="Enter your password..." /> */}

                            <Label htmlFor="number">Enter phone number</Label>
                            <Input {...register("number")} type="tel" id="number" placeholder="Enter your number..." />

                            <Label htmlFor="address">Enter address</Label>
                            <Input {...register("address")} type="text" id="address" placeholder="Enter your address..." />

                            <Label htmlFor="state">Enter state</Label>
                            <Input {...register("state")} type="text" id="state" placeholder="Enter state..." />

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
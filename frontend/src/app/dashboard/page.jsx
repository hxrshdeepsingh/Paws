"use client";

import { useForm } from 'react-hook-form';
import { putRequest } from "../../lib/api";

import Dashboard from "@/config/dashboard.json";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from 'react';

function Account() {
    const { toast } = useToast();
    const { register, handleSubmit, setValue } = useForm();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo);
            setValue("username", parsedUserInfo.username);
            setValue("email", parsedUserInfo.email);
            setValue("number", parsedUserInfo.number);
            setValue("address", parsedUserInfo.address);
            setValue("state", parsedUserInfo.state);
        }
    }, [setValue]);

    async function onSubmit(data) {
        try {
            const response = await putRequest(`${process.env.NEXT_PUBLIC_API_BASE}/api/account/update`, data);
            if (response) {
                localStorage.setItem("userInfo", JSON.stringify(data));
                toast({ variant: "default", title: "Updated Successfully", description: "✌" });
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error occurred", description: "Try Again!!!" });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle>{Dashboard.Profile.Title}</CardTitle>
                        <CardDescription>{Dashboard.Profile.Subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="capitalize flex flex-col gap-3">
                        <Label htmlFor="username">Username</Label>
                        <Input {...register("username")} type="text" id="username" placeholder="Enter your sername..." defaultValue={userInfo?.username || ""} />

                        <Label htmlFor="email">Email ddress</Label>
                        <Input {...register("email")} type="email" id="email" placeholder="Enter your email..." defaultValue={userInfo?.email || ""} />

                        <Label htmlFor="number">Phone number</Label>
                        <Input {...register("number")} type="tel" id="number" placeholder="Enter your number..." defaultValue={userInfo?.number || ""} />

                        <Label htmlFor="address">address</Label>
                        <Input {...register("address")} type="text" id="address" placeholder="Enter your address..." defaultValue={userInfo?.address || ""} />

                        <Label htmlFor="state">state</Label>
                        <Input {...register("state")} type="text" id="state" placeholder="Enter state..." defaultValue={userInfo?.state || ""} />
                    </CardContent>
                    <CardFooter>
                        <Button className="mt-10" type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    );
}

export default Account;

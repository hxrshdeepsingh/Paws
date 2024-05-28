"use client";

import { useForm } from 'react-hook-form';
import { putRequest } from "../../lib/api";
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from 'react';

export default function Account() {
    const { toast } = useToast();
    const { register, handleSubmit, setValue } = useForm();
    const { push } = useRouter();
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
            const response = await putRequest("http://localhost:2222/api/account/update", data);
            if (response) {
                localStorage.setItem("userInfo", JSON.stringify(data));
                toast({ variant: "default", title: "Updated Successfully", description: "✌" });
                setTimeout(() => {
                    push('/posts');
                }, 1000);
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error occurred", description: "Try Again!!!" });
        }
    }

    return (
        <>
            <h2>Update account</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam labore doloribus, inventore incidunt ex rerum eligendi. Pariatur voluptas obcaecati veniam reprehenderit cumque, iusto quasi. Magnam atque omnis dolores inventore, quod tempora placeat.</p>

            <form onSubmit={handleSubmit(onSubmit)} className='my-5 flex justify-center'>
                <Card className="sm:w-[380px]">
                    <CardHeader>
                        <CardTitle>Update Account</CardTitle>
                        <CardDescription>Update your account by filling in the details below</CardDescription>
                    </CardHeader>
                    <CardContent className="capitalize">
                        <Label htmlFor="username">Enter username</Label>
                        <Input {...register("username")} type="text" id="username" placeholder="Enter your username..." defaultValue={userInfo?.username || ""} />

                        <Label htmlFor="email">Your email address</Label>
                        <Input {...register("email")} type="email" id="email" placeholder="Enter your email..." defaultValue={userInfo?.email || ""} />

                        <Label htmlFor="number">Enter phone number</Label>
                        <Input {...register("number")} type="tel" id="number" placeholder="Enter your number..." defaultValue={userInfo?.number || ""} />

                        <Label htmlFor="address">Enter address</Label>
                        <Input {...register("address")} type="text" id="address" placeholder="Enter your address..." defaultValue={userInfo?.address || ""} />

                        <Label htmlFor="state">Enter state</Label>
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

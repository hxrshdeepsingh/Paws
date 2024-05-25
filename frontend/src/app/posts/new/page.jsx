'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { postRequest } from "../../../lib/api"
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import { useForm } from 'react-hook-form';

export default function newPost() {
    const { toast } = useToast()
    const { push } = useRouter();
    const { register, handleSubmit, setValue } = useForm();

    async function onSubmit(data) {
        try {
            const response = await postRequest("http://localhost:2222/api/posts/create", data);
            if (response) {
                toast({ variant: "default", title: "Post created succesfully!", description: "Wait for redirection" });
                setTimeout(() => {
                    push('/posts');
                }, 1000)
            }
        } catch (error) {
            toast({ variant: "destructive", title: "Error occurred", description: "Try again!!!" });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="sm:w-[380px]">
                    <CardHeader>
                        <CardTitle>Create Posts</CardTitle>
                        <CardDescription> Create a new post to share your ideas, stories, or questions with our community.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className="capitalize" htmlFor="name">Pet's name</Label>
                        <Input {...register("name")} type="text" id="name" placeholder="Enter your pet name here..." />

                        <Label className="capitalize" htmlFor="age">Pet's age</Label>
                        <Input {...register("age")} type="number" id="age" placeholder="Enter your pet's age here..." />

                        <Label className="capitalize" htmlFor="gender">Pet's gender</Label>
                        <Select onValueChange={(value) => setValue("gender", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your pet's gender..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>

                        <Label className="capitalize" htmlFor="breed">Pet's breed</Label>
                        <Input {...register("breed")} type="text" id="breed" placeholder="Enter your pet's breed here..." />

                        <Label htmlFor="description">Tell About your pets</Label>
                        <Textarea {...register("description")} id="description" rows="7" placeholder="Enter your description here..."></Textarea>

                    </CardContent>
                    <CardFooter>
                        <Button className="mt-10" type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    );
}

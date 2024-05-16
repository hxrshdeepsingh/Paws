'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {postRequest, getRequest} from "../../../lib/api"

export default function CreatePost() {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        // try {
        //     const response = await postRequest("http://localhost:2222/api/posts/all", data);
        //     console.log(response);
        // } catch (error) {
        //     console.error("Error submitting data:", error);
        // }
        try {
            const response = await getRequest("http://localhost:2222/api/posts/all");
            console.log(response);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className="container min-h-fit my-10">
            <div className="bg-gray-100 shadow-xl text-center p-5 sm:p-10 md:p-10 lg:p-16 rounded-3xl">
                <h1 className="text-3xl">Create Posts</h1>
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iure.</p>
                
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="flex flex-col w-full gap-5">
                            <div className="text-start w-full items-center gap-1.5">
                                <Label className="capitalize" htmlFor="name">Pet's name</Label>
                                <Input {...register("petname")} type="text" id="name" placeholder="Enter your pet name here..." />
                            </div>

                            <div className="text-start w-full items-center gap-1.5">
                                <Label className="capitalize" htmlFor="age">Pet's age</Label>
                                <Input {...register("petage")} type="number" id="age" placeholder="Enter your pet's age here..." />
                            </div>

                            <div className="text-start w-full items-center gap-1.5">
                                <Label className="capitalize" htmlFor="gender">Pet's gender</Label>
                                <Select onValueChange={(value) => setValue("petGender", value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select your pet's gender..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-5 justify-center">
                            <div className="text-start mx-auto w-full items-center gap-1.5">
                                <Label htmlFor="upload">Add pictures</Label>
                                <Input type="file" id="upload" />
                            </div>
                            <div className="text-start mx-auto w-full items-center gap-1.5">
                                <Label htmlFor="description">Tell About your pets</Label>
                                <Textarea {...register("description")} id="description" rows="7" placeholder="Enter your description here..."></Textarea>
                            </div>
                        </div>
                    </div>

                    <Button className="mt-10" type="submit">Submit</Button>
                </form>



            </div>
        </div>
    );
}

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

function newPost() {
  const { toast } = useToast()
  const { push } = useRouter();
  const { register, handleSubmit, setValue } = useForm();
  async function onSubmit(data) {
    try {
      const response = await postRequest(`${process.env.NEXT_PUBLIC_API_BASE}/api/posts/create`, data);
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
        <Card>
          <CardHeader>
            <CardTitle>Create Posts</CardTitle>
            <CardDescription> Create a new post to share your ideas, stories, or questions with our community.</CardDescription>
          </CardHeader>
          <CardContent>
            <Label className="capitalize" htmlFor="name">Name</Label>
            <Input {...register("name")} type="text" id="name" placeholder="Enter your pet name here..." />

            <Label className="capitalize" htmlFor="age">Age</Label>
            <Input {...register("age")} type="number" id="age" placeholder="Enter your pet's age here..." />

            <Label className="capitalize" htmlFor="breed">Breed</Label>
            <Input {...register("breed")} type="text" id="breed" placeholder="Enter your pet's breed here..." />

            <Label className="capitalize" htmlFor="species">Species</Label>
            <Input {...register("species")} type="text" id="species" placeholder="Enter your pet's species here..." />

            <Label className="capitalize" htmlFor="weight">Weight</Label>
            <Input {...register("weight")} type="text" id="weight" placeholder="Enter your pet's weight here..." />

            <Label className="capitalize" htmlFor="vaccinated">Is vaccinated?</Label>
            <Select onValueChange={(value) => setValue("vaccinated", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select yes/not..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>

            <Label className="capitalize" htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => setValue("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your pet's gender..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="description">About</Label>
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

export default newPost;
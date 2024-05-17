"use client";

import { useEffect, useState } from "react";
import { getRequest } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { HeartFilledIcon } from "@radix-ui/react-icons"

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest("http://localhost:2222/api/posts/all");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container w-full md:w-3/4  mx-auto  py-5">

                <div className="bg-gray-950 text-white rounded-xl p-5 flex justify-between">
                    <div>
                        <h1>Find your mate or friend</h1>
                    </div>
                </div>

                <hr className="h-6 w-full my-6" />

                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5"><HeartFilledIcon className="text-accent" />All Paws near you</h1>

                    <div className="gap-5 shadow-lg p-5 rounded-xl flex flex-col md:flex-row">
                        <div className="flex flex-col justify-between gap-3 object-cover">
                            <Image src="/assets/w.webp" alt="sdsdsds" objectFit="cover" width={300} height={300} />
                            <Button className="w-full">
                                <Link href="">Check</Link>
                            </Button>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Adorable Pup Needs a Loving Home!</h2>
                            <p className="mt-2">Meet Max</p>
                            <p className="mt-2">Cat</p>
                            <p>Max is a delightful 2-year-old mixed breed pup who's overflowing with love and energy! He's medium-sized, with a sleek black coat that shines in the sunlight. Max has the most expressive eyes that will melt your heart in an instant.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

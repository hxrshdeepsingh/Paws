'use client';

import Link from "next/link";
import Links from "@/config/links.json"
import Dashboard from "@/config/dashboard.json";

import { getRequest, deleteRequest } from "../../../lib/api";
import { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

export default function editPost() {
    const [posts, setPosts] = useState([]);
    const { toast } = useToast()

    useEffect(() => {
        const UIS = localStorage.getItem("userApi");
        if (UIS) {
            const userInfo = JSON.parse(UIS);
            const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/userPosts/${userInfo.public_id}`;

            async function fetchUserPosts(url) {
                try {
                    const response = await getRequest(url);
                    setPosts(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUserPosts(url);
        }
    }, []);

    async function deletePost(id) {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/delete/${id}`;
            const response = await deleteRequest(url);
            if (response) {
                toast({ variant: "default", title: "Post deleted successfully", description: "Wait for redirection!" })
            }

        } catch (error) {
            toast({ variant: "destructive", title: "Error occured", description: "Try Again!!!" })
        }
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{Dashboard.Manage.Title}</CardTitle>
                    <CardDescription>{Dashboard.Profile.Subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead>Gender</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Created at
                                </TableHead>
                                <TableHead className="hidden md:table-cell">Actions</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {post.name}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{post.age}</Badge>
                                        </TableCell>
                                        <TableCell>{post.gender}</TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {post.date}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>
                                                        <Link href={`${Links.Explore.Url}/${post.postId}`}>Check</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link href={`${Links.Manage.Url}/${post.postId}`}>Update</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => deletePost(post.postId)}>
                                                        delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
                                        No posts found.
                                    </TableCell>
                                </TableRow>
                            )}

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing 1-10 of 32 products
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}
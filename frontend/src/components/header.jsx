"use client"

import { Button } from "./ui/button"
import { RowsIcon, PersonIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

import Link from "next/link"
import { useEffect, useState } from 'react';

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = setUser(localStorage.getItem("userInfo"));
        if (user) {
            setUser(JSON.parse(userInfo));
        }
    }, []);


    return (
        <>
            <header className="shadow h-20">
                <div className="container flex flex-row justify-between items-center">

                    <div className="w-1/3 flex align-middle justify-start my-auto">
                        <div className="text-xl uppercase font-semibold">
                            <Link href={"/"}>
                                Paws & People
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/3 my-auto">
                        <div className="visible flex justify-end sm:visible md:hidden lg:hidden">
                            <Drawer>
                                <DrawerTrigger>
                                    <RowsIcon className="h-7 w-7" />
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                        <div className="flex flex-col justify-between h-full gap-y-5 mt-10">
                                            <Link href={"/about"}>About</Link>
                                            <Link href={"/posts"}>posts</Link>
                                            <Link href={"/contact"}>Contact</Link>
                                        </div>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <Button variant="secondary">
                                            <Link href={"/account/register"} className="flex">Register</Link>
                                        </Button>
                                        <Button variant="default">
                                            <Link href={"/account/login"} className="flex">Login</Link>
                                        </Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                        <div className="hidden md:flex capitalize">
                            <ul className="flex gap-x-5 w-full text-md justify-center">
                                <li><Link href={"/about"}>About</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                                <li><Link href={"/posts/new"}>Create</Link></li>
                                <li><Link href={"/posts"}>pets</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-1/3 hidden sm:hidden my-auto md:flex gap-x-3 align-middle justify-end">
                        {!user && (
                            <div className="p-0 m-0">
                                <Button variant="link">
                                    <Link className="text-black" href={"/account/login"}>Login</Link>
                                </Button>
                                <Button variant="default">
                                    <Link href={"/account/register"}>Register</Link>
                                </Button>
                            </div>
                        )}

                        {user && (
                            <div className="flex gap-x-3 align-middle items-center">
                                <h3>Hey, there</h3>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <Link className="h-full w-full" href={"/account"}>Profile</Link>
                                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Billing
                                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Settings
                                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            Log out
                                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        )}
                    </div>
                </div >
            </header>
        </>
    )
}
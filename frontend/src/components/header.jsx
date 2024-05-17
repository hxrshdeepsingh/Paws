import { Button } from "./ui/button"
import { EnvelopeOpenIcon, RowsIcon, PersonIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

export default function header() {
    return (
        <>
            <header className=" shadow-lg">
                <div className="container flex justify-between py-4 sm:py-6 md:py-8 align-middle">

                    <div className="w-1/5 flex align-middle justify-start my-auto">
                        <h1 className="text-2xl sm:text-2xl uppercase md:text-2xl font-semibold">
                            <Link href={"/"}>paws</Link>
                        </h1>
                    </div>

                    <div className="w-3/5 my-auto">
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
                        <div className="hidden md:flex">
                            <ul className="flex gap-x-10 w-full text-xl justify-center">
                                <li className="hover:underline"><Link href={"/about"}>About</Link>
                                    <ArrowTopRightIcon className="mr-2 h-4 w-4 inline-block" />
                                </li>
                                <li className="hover:underline"><Link href={"/Contact"}>Contact</Link>
                                    <ArrowTopRightIcon className="mr-2 h-4 w-4 inline-block" />
                                </li>
                                <li className="hover:underline"><Link href={"/posts"}>Find</Link>
                                    <ArrowTopRightIcon className="mr-2 h-4 w-4 inline-block" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-1/5 hidden sm:hidden md:flex gap-x-3 justify-end ">
                        <Button variant="secondary">
                            <PersonIcon className="mr-2 h-4 w-4" /> <Link href={"/account/register"}>Register</Link>
                        </Button>
                    </div>
                </div >
            </header>
        </>
    )
}
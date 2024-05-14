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
            <header>
                <div className="container px-5 flex justify-between py-4 align-middle">

                    <div className="w-1/5 flex align-middle justify-start my-auto">
                        <h1 className="text-xl sm:text-xl md:text-2xl font-semibold">
                            <Link href={"/"}>paws</Link>
                        </h1>
                    </div>

                    <div className="w-3/5 my-auto">
                        <div className="visible flex justify-end sm:visible md:hidden lg:hidden">
                            <Drawer>
                                <DrawerTrigger>
                                    <RowsIcon className="mr-2 h-4 w-4" />
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <Button variant="secondary">
                                            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Register
                                        </Button>
                                        <Button variant="default">Login</Button>
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
                                <li className="hover:underline"><Link href={"/Find"}>Find</Link>
                                    <ArrowTopRightIcon className="mr-2 h-4 w-4 inline-block" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-1/5 hidden sm:hidden md:flex gap-x-3 justify-end ">
                        <Button variant="default">
                            <PersonIcon className="mr-2 h-4 w-4" /> <Link href={"/login"}>Register</Link>
                        </Button>
                    </div>
                </div >
            </header>
        </>
    )
}
'use client'

import { useState } from 'react';
import useLinks from "../hooks/useLinks";
import NavLink from './ui/navLink';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
    const isAuthenticated = useAuth(true);
    const links = useLinks();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {push} = useRouter();

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className="sticky z-1 container md:w-[90%] top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <NavLink href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Package2 className="h-6 w-6" />
                    </NavLink>
                    <NavLink href={links.HOME} className="text-muted-foreground transition-colors hover:text-foreground">
                        Home
                    </NavLink>
                    <NavLink href={links.EXPLORE} className="text-muted-foreground transition-colors hover:text-foreground">
                        Explore
                    </NavLink>
                    <NavLink href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        About
                    </NavLink>
                    <NavLink href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        Contact
                    </NavLink>
                    <NavLink href={links.DASHBOARD} className="text-muted-foreground transition-colors hover:text-foreground">
                        Dashboard
                    </NavLink>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <NavLink href="#" className="flex items-center gap-2 text-lg font-semibold">
                                <Package2 className="h-6 w-6" />
                            </NavLink>
                            <NavLink href="#" className="text-muted-foreground hover:text-foreground">
                                Dashboard
                            </NavLink>
                            <NavLink href="#" className="text-muted-foreground hover:text-foreground">
                                Orders
                            </NavLink>
                            <NavLink href="#" className="text-muted-foreground hover:text-foreground">
                                Products
                            </NavLink>
                            <NavLink href="#" className="text-muted-foreground hover:text-foreground">
                                Customers
                            </NavLink>
                            <NavLink href="#" className="hover:text-foreground">
                                Settings
                            </NavLink>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {(isAuthenticated) ? (
                                <>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <NavLink href={links.DASHBOARD} className="text-muted-foreground transition-colors hover:text-foreground">
                                            Dashboard
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <NavLink href={links.DASHBOARD} className="text-muted-foreground transition-colors hover:text-foreground">
                                            Logout
                                        </NavLink>
                                    </DropdownMenuItem>
                                </>) : (
                                <>
                                <DropdownMenuItem onClick={() => { push("/login") }}>Login</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={() => { push("/register") }}>Register</DropdownMenuItem>
                                </>
                            )
                            }

                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </header>
        </>
    )
}
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Links from "@/config/links.json"
import useAuth from '../hooks/useAuth';
import NavLink from './ui/navLink';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CircleUser, Menu, Package2, Search, PawPrint, Bone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
    const isAuthenticated = useAuth(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { push } = useRouter();

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className="sticky z-10 text-lg   container top-0 flex h-24 items-center gap-4 bg-background">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
                    <NavLink href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <PawPrint className="h-6 w-6 text-white" />
                    </NavLink>
                    <NavLink href={Links.Home.Url} className="text-muted-foreground transition-colors hover:text-foreground">{Links.Home.Name}</NavLink>
                    <NavLink href={Links.Explore.Url} className="text-muted-foreground transition-colors hover:text-foreground">{Links.Explore.Name}</NavLink>
                    <NavLink href={Links.About.Url} className="text-muted-foreground transition-colors hover:text-foreground">{Links.About.Name}</NavLink>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <NavLink href={Links.Home.Url} className="flex items-center gap-2 text-lg font-semibold">
                                <Package2 className="h-6 w-6" />
                            </NavLink>
                            <NavLink href={Links.Home.Url} className="text-muted-foreground hover:text-foreground">{Links.Home.Name}</NavLink>
                            <NavLink href={Links.About.Url} className="text-muted-foreground hover:text-foreground">{Links.About.Name}</NavLink>
                            <NavLink href={Links.Contact.Url} className="text-muted-foreground hover:text-foreground">{Links.Contact.Name}</NavLink>
                            <NavLink href={Links.Explore.Url} className="text-muted-foreground hover:text-foreground">{Links.Explore.Name}</NavLink>
                            <NavLink href={Links.Dashboard.Url} className="hover:text-foreground">{Links.Dashboard.Name}</NavLink>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full text-lg items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">
                        <Bone />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {(isAuthenticated) ? (
                                <>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <NavLink href={Links.Dashboard.Url} className="text-muted-foreground transition-colors hover:text-foreground">
                                            {Links.Dashboard.Name}
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <NavLink href={Links.Dashboard.Url} className="text-muted-foreground transition-colors hover:text-foreground">
                                            Logout
                                        </NavLink>
                                    </DropdownMenuItem>
                                </>) : (
                                <>
                                    <DropdownMenuItem onClick={() => { push(Links.Login.Url) }}>{Links.Login.Name}</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => { push(Links.Register.Url) }}>{Links.Register.Name}</DropdownMenuItem>
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
'use client'

import Link from "next/link";
import useLinks from "@/hooks/useLinks";
import { refresh } from "@/lib/refresh";

import { logout } from "@/lib/logout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Layout({ children }) {
    const Links = useLinks();
    const { toast } = useToast();

    function checkLogout() {
        const status = logout();
        if (status) {
            toast({ variant: "default", title: "Logout successfully!", description: "Wait for redirection" });
            setTimeout(() => {
                refresh("/explore")
            }, 1000)
        }
    }
    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">Settings</h1>
                    </div>
                    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                        <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                            <Link href={Links.DASHBOARD}>Profile</Link>
                            <Link href={Links.POST_CREATE}>Create</Link>
                            <Link href={Links.POST_MANAGE}>Manage</Link>
                            <Button variant="destructive" onClick={checkLogout}>Logout</Button>
                        </nav>
                        <div className="grid gap-6">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
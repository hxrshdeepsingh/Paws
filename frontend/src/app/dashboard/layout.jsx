'use client'

import NavLink from "@/components/ui/navLink";
import { refresh } from "@/lib/refresh";

import Links from "@/config/links.json";
import Dashboard from "@/config/dashboard.json";

import { logout } from "@/lib/logout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

import ProtectedRoute from '@/components/protectedRoute';

function Layout({ children }) {
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
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  p-4 md:gap-8 md:p-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">{Dashboard.Title}</h1>
                        <h3 className="text-muted-foreground">{Dashboard.Subtitle}</h3>
                        <Separator className="mt-4 bg-primary" />
                    </div>
                    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                        <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                            <NavLink href={Links.Dashboard.Url}>Profile</NavLink>
                            <NavLink href={Links.Create.Url}>{Links.Create.Name}</NavLink>
                            <NavLink href={Links.Manage.Url}>{Links.Manage.Name}</NavLink>
                            <Button className="p-0 w-fit text-destructive" variant="link" onClick={checkLogout}>Logout</Button>
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

export default ProtectedRoute(Layout)
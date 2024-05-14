import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function createPost() {
    return (
        <>
            <div className="container min-h-fit my-10">
                <div className="bg-gray-100 shadow-xl text-center p-5 sm:p-10 md:p-10 lg:p-16 rounded-3xl">
                    <h1 className="text-3xl">Create Posts</h1>
                    <p className="mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iure.</p>
                    <form className="flex flex-col gap-5 md:flex-row" action="">

                        <div className="flex flex-col w-full gap-5">
                            <div className="text-start w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="text-start w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="text-start w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-5 justify-center">
                            <div className="text-start mx-auto w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="text-start mx-auto w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="text-start mx-auto w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
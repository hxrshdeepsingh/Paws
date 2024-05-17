import { Button } from "./ui/button"
import { Input } from "./ui/input"

import Link from "next/link"

export default function footer() {
    return (
        <>
            <footer className="bg-gray-950 text-white">
                <div className="container py-10 flex gap-y-5 justify-between flex-col sm:flex-col md:flex-row">
                    <div className="w-full text-center md:text-start">
                        <h2 className="text-3xl font-semibold mb-10 uppercase">paws</h2>
                        <p>tel:+91 3789-3828</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Accusamus, reprehenderit?</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-10 text-center">Links</h2>
                        <ul className="capitalize text-center flex flex-col">
                            <Link className="hover:underline" href={"/about"}>About</Link>
                            <Link className="hover:underline" href={"/posts"}>Posts</Link>
                            <Link className="hover:underline" href={"/contact"}>Contact</Link>
                        </ul>
                    </div>
                    <div className="text-center w-full">
                        <ul>
                            <h3 className="text-2xl mb-10 font-semibold">Join# Adoption</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi!</p>
                            <div className="flex flex-col w-full items-center space-y-3 mt-5">
                                <Input className="w-4/5" type="email" placeholder="Email" />
                                <Button className="w-4/5" variant="default" type="submit">Subscribe</Button>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center py-3 text-center border-t-2 border-dotted border-gray-700">
                    <h6>© Cambridge University Press & Assessment 2024</h6>
                </div>
            </footer>
        </>
    )
}
import { Button } from "./ui/button"
import { Input } from "./ui/input"

import Link from "next/link"
import data from "@/config/footer.json"

export default function Footer() {
    return (
        <>
            <footer className="container bg-muted rounded-t-3xl md:w-[90%]">
                <div className="py-10 flex gap-y-5 justify-between flex-col sm:flex-col md:flex-row">
                    <div className="w-full text-center md:text-start">
                        <h2 className="text-xl font-semibold mb-10 capitalize">{data.section1.title}</h2>
                        <p>{data.section1.phone}</p>
                        <p>{data.section1.description}</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-10 text-center">Links</h2>
                        <ul className="capitalize text-center flex flex-col">
                            <Link className="hover:underline" href={"/about"}>About</Link>
                            <Link className="hover:underline" href={"/posts"}>Posts</Link>
                            <Link className="hover:underline" href={"/contact"}>Contact</Link>
                        </ul>
                    </div>
                    <div className="text-center w-full mb-20">
                        <ul>
                            <h3 className="text-xl mb-10 font-semibold">{data.section3.title}</h3>
                            <p className="text-sm">{data.section3.description}</p>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center py-3 text-center">
                    <h6>{data.copyright}</h6>
                </div>
            </footer>
        </>
    )
}
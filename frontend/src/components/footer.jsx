import Link from "next/link"
import Data from "@/config/footer.json"
import Links from "@/config/links.json"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="pt-10 container flex gap-y-5 justify-between flex-col sm:flex-col md:flex-row">
                    <div className="w-full text-center md:text-start">
                        <h2 className="text-2xl font-semibold mb-10 capitalize">{Data.section1.title}</h2>
                        <p>{Data.section1.phone}</p>
                        <p>{Data.section1.description}</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold mb-10 text-center">Links</h2>
                        <ul className="capitalize text-center flex flex-col">
                            <Link className="hover:underline" href={Links.About.Url}>{Links.About.Name}</Link>
                            <Link className="hover:underline" href={Links.Contact.Url}>{Links.Contact.Name}</Link>
                            <Link className="hover:underline" href={Links.Explore.Url}>{Links.Explore.Name}</Link>
                        </ul>
                    </div>
                    <div className="text-center w-full mb-20">
                        <ul>
                            <h3 className="text-2xl mb-10 font-semibold">{Data.section3.title}</h3>
                            <p className="text-sm">{Data.section3.description}</p>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center py-3 text-center">
                    <h6>{Data.copyright}</h6>
                </div>
            </footer>
        </>
    )
}
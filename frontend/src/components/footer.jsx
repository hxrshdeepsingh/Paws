import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function footer() {
    return (
        <>
            <div className="container">
                <div className="bg-gray-950 text-white rounded-t-3xl py-10 px-3 md:p-16 lg:p-20 flex gap-y-5 justify-between flex-col sm:flex-col md:flex-row">
                    <div className="w-full text-center md:text-start">
                        <h2 className="text-3xl font-semibold mb-10">paws</h2>
                        <p>tel:+91 3789-3828</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Accusamus, reprehenderit?</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-10 text-center">Links</h2>
                        <ul className="text-center">
                            <li>about</li>
                            <li>contact</li>
                            <li>find</li>
                        </ul>
                    </div>
                    <div className="text-center w-full">
                        <ul>
                            <h3 className="text-2xl mb-10 font-semibold">Join# Adoption</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi!</p>
                            <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
                                <Input type="email" placeholder="Email" />
                                <Button variant="default" type="submit">Subscribe</Button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
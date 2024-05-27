import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	GlobeIcon,
	PersonIcon,
	LockClosedIcon,
	StopwatchIcon,
} from '@radix-ui/react-icons'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'

export default function Home() {
	return (
		<>
			<div className="container md:w-[90%]">
				<div className=" h-[50vh] flex flex-col justify-center">
					<div className="w-full text-center">
						<h2>Landing page title</h2>
						<h3>And a subheading describing your site, too</h3>
						<Button className="w-fit mt-5">Explore</Button>
					</div>
				</div>
				<div className="my-5">
					<div className="py-3 flex flex-col-reverse md:flex-row justify-between items-center gap-5">
						<div className="w-full ">
							<h2>Landing page title</h2>
							<h3>And a subheading describing your site, too</h3>
							<Button className="w-fit mt-5">Explore</Button>
						</div>
						<div className="w-full">
							<img
								className="w-full h-auto rounded-3xl"
								src={'/assets/Dog.avif'}
								alt="Dog"
							/>
						</div>
					</div>

					<div className="py-3 flex flex-col md:flex-row justify-between items-center gap-5">
						<div className="w-full">
							<img
								className="w-full h-auto rounded-3xl"
								src={'/assets/Dog.avif'}
								alt="Dog"
							/>
						</div>
						<div className="w-full">
							<h2>Landing page title</h2>
							<h3>And a subheading describing your site, too</h3>
							<Button className="w-fit mt-5">Explore</Button>
						</div>
					</div>
				</div>

				<Separator className="my-4" />

				<div className="my-10">
					<h2>Heading</h2>
					<div>
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							<div className="flex flex-col gap-2 border rounded-xl p-5">
								<GlobeIcon className="h-5 w-5" />
								<h3 className="font-semibold">Subheading</h3>
								<p>
									Body text for whatever you’d like to say. Add main takeaway
									points, quotes, anecdotes, or even a very very short story.
								</p>
							</div>

							<div className="flex flex-col gap-2 border rounded-xl p-5">
								<PersonIcon className="h-5 w-5" />
								<h3 className="font-semibold">Subheading</h3>
								<p>
									Body text for whatever you’d like to say. Add main takeaway
									points, quotes, anecdotes, or even a very very short story.
								</p>
							</div>

							<div className="flex flex-col gap-2 border rounded-xl p-5">
								<LockClosedIcon className="h-5 w-5" />
								<h3 className="font-semibold">Subheading</h3>
								<p>
									Body text for whatever you’d like to say. Add main takeaway
									points, quotes, anecdotes, or even a very very short story.
								</p>
							</div>

							<div className="flex flex-col gap-2 border rounded-xl p-5">
								<StopwatchIcon className="h-5 w-5" />
								<h3 className="font-semibold">Subheading</h3>
								<p>
									Body text for whatever you’d like to say. Add main takeaway
									points, quotes, anecdotes, or even a very very short story.
								</p>
							</div>
						</div>
					</div>
				</div>

				<Separator className="my-4" />

				<div className="my-10">
					<h2>Heading</h2>
					<Carousel className="w-full">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index}>
									<div className="p-5 border-2 rounded-xl">
										<div className="text-center my-10">
											<h2>Landing</h2>
											<h3>And a subheading describing your site, too</h3>
											<Button className="w-fit mt-5">Explore</Button>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</>
	)
}

import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<>
			<div className="container py-10">
				<div className="flex">
					<div>
						<h2 className="text-3xl sm:text:4xl md:text-5xl font-semibold mb-10">
							{' '}
							Lorem ipsum{' '}
							<span className="bg-clip-text text-transparent linearPrimaryAccent">
								Adoptions
							</span>
						</h2>
						<p>
							Choosing colors or typography for your website? Use the Toolbar
							below to realize your choices.
						</p>
						<div className="flex gap-x-5 gap-y-3 my-10 justify-center sm:justify-start flex-col sm:flex-col md:flex-row">
							<Button variant="default">Get Started</Button>
							<Button variant="secondary">How does it works?</Button>
						</div>
					</div>
				</div>

				<div className="bg-gray-950 w-full text-center text-white rounded-xl p-2 sm:p-2 md:p-6">
					<h3 className="font-semibold">How can we help?</h3>
					<h2 className="font-semibold text-xl sm:text-2xl md:text-4xl">
						while on vacation, <br /> it's very easy and joyfull & greatfull
					</h2>
				</div>
			</div>
		</>
	)
}

import '../style/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

import ProgressProvider from '@/components/progress'
import { Toaster } from '@/components/ui/toaster'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Pet Adoption Center - Find Your Perfect Pet',
	description:
		'Welcome to the Pet Adoption Center, where you can find your perfect pet companion. Browse our adoptable animals, learn about our adoption process, and make a difference in an animal life.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<ProgressProvider>{children}</ProgressProvider>
				<Footer />
				<Toaster />
			</body>
		</html>
	)
}

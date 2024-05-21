import '../style/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

import ProgressProvider from '@/components/progressProvider'
import { Toaster } from '@/components/ui/toaster'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Homepage',
	description: 'Lorem Ipsum',
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

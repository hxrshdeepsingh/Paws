import { Inter } from 'next/font/google'
import '../style/globals.css'
import Header from '../components/header'

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
				{children}
			</body>
		</html>
	)
}

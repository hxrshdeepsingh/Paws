import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ title, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Header />

			<div className="Content">{children}</div>

			<Footer />
		</>
	)
}

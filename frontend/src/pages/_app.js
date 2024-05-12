import { NextUIProvider } from '@nextui-org/react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<div className="purple-light text-foreground bg-background">
				<Component {...pageProps} />
			</div>
		</NextUIProvider>
	)
}

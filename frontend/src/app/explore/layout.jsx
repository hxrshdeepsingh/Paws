export default function Layout({ children }) {
    return (
        <>
            <main className="container min-h-[100vh]">
                {children}
            </main>
        </>
    )
}
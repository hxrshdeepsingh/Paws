export default function Layout({ children }) {
    return (
        <>
            <main className="container bg-fuchsia-700 min-h-[100vh]">
                {children}
            </main>
        </>
    )
}
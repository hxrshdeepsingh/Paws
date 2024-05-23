export default function Layout({ children }) {
    return (
        <>
            <main className="container bg-gray-100 min-h-[100vh]">
                {children}
            </main>
        </>
    )
}
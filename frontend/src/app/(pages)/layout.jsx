export default function Layout({ children }) {
    return (
        <>
            <main className="container min-h-[80vh]">
                {children}
            </main>
        </>
    )
}
export default function Layout({ children }) {
    return (
        <>
            <main className="container min-h-[80vh] p-5">
                {children}
            </main>
        </>
    )
}
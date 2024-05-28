export default function Layout({ children }) {
    return (
        <>
            <main className="container max-w-[90%] min-h-[80vh]">
                {children}
            </main>
        </>
    )
}
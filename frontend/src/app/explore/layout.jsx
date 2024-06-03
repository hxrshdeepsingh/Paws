export default function Layout({ children }) {
    return (
        <>
            <main className="container md:w-[90%] min-h-[100vh]">
                {children}
            </main>
        </>
    )
}
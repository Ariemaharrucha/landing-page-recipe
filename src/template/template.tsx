import Navbar from "../components/share/navbar"
import Footer from "../components/share/footer"
import Inbox from "../components/share/inbox"
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white font-family flex flex-col">
            <Navbar />
            <section className="flex-1 container mx-auto py-10">
                {children}
            </section>
            <Inbox />
            <Footer />
        </div>
    )
}
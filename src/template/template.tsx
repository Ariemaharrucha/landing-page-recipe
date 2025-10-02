import Navbar from "../components/share/navbar";
import Footer from "../components/share/footer";
import Inbox from "../components/share/inbox";
import RecipeSection from "../components/template/recipe-section";
export default function Template({ children, recipeSection }: {
  children: React.ReactNode;
  recipeSection?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white font-family flex flex-col">
      <Navbar />
      <section className="flex-1 container mx-auto py-10">{children}</section>
      <Inbox />
      {recipeSection && <RecipeSection />}
      <Footer />
    </div>
  );
}

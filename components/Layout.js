import Navigation from "./organisms/Navigation";
import Footer from "./organisms/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-merino flex flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

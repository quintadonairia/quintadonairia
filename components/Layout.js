import Navigation from "./organisms/Navigation";
import Footer from "./organisms/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-tan-50 flex flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

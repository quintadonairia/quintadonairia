import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-merino flex flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

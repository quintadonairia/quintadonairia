import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-light">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

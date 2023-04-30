import { useRouter } from "next/router";
import Footer from "../organisms/Footer";
import Navigation from "../organisms/Navigation";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-light">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

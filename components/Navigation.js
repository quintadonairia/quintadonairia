import Link from "next/link";
import Button from "./atoms/Button";
import Sidebar from "./Sidebar";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between z-10 p-8 fixed top-0 left-0 right-0">
      <Sidebar />
      <Link href="/">
        <img
          src="/graphics/wordmark-white.svg"
          alt="logo"
          className="w-40 cursor-pointer"
        />
      </Link>
      <Link href="/stay">
        <Button variant="primary">Book Now</Button>
      </Link>
    </div>
  );
};

export default Navigation;

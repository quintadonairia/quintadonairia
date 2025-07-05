import { useState } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Menu from '../organisms/Menu';

export default function Layout({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuIsActive = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="bg-background-neutral-default flex flex-col">
      <Header
        handleMenuIsActive={handleMenuIsActive}
        isMenuActive={isMenuActive}
      />
      <Menu
        handleMenuIsActive={handleMenuIsActive}
        isMenuActive={isMenuActive}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

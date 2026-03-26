import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { Menu } from '@/components/organisms/menu';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
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

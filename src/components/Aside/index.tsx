'use client';
import MenuItem from '@/components/MenuItem';
import Footer from '../Footer';

type FooterType = {
  owner: boolean;
};

export default function Aside({ owner }: FooterType) {
  const prefix = owner ? 'owner' : 'user';
  return (
    <aside className="flex flex-col justify-between h-screen bg-main w-52">
      <nav>
        <ul className="hidden md:flex flex-col items-left justify-center gap-4 mt-4">
          <li>
            <MenuItem href={`/${prefix}/home`} label="Home" />
          </li>
          <li>
            <MenuItem href={`/${prefix}/profile`} label="Meu Perfil" />
          </li>
        </ul>
      </nav>
      {owner && <Footer />}
    </aside>
  );
}

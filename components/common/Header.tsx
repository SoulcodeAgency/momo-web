import Link from 'next/link';
import Image from 'next/image';
import LinkList from './LinkList';
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const t = useTranslations('Header');
  return (
    <header className="bg-primary text-white h-16 w-full">
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary border-b shadow-sm">
        <div className="container h-16 mx-auto px-4 lg:px-6 flex items-center justify-between">
          <Link className="flex h-16 items-center justify-center" href="/">
            <Image
              className=""
              src="/momo-transparent-icon-white.png"
              alt="Momo logo"
              width={40}
              height={40}
              priority
            />
            <span className="ml-2 text-lg font-bold">{t('Name')}</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <LinkList
              links={[
                { href: '/#features', text: 'Features' },
                { href: '/#pricing', text: 'Pricing' },
                { href: '/#contact', text: 'Contact' },
              ]}
            />

            {children}
          </nav>
        </div>
      </div>
    </header>
  );
}

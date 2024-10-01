import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            className=""
            src="/momo-transparent-icon.png"
            alt="Momo logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 text-lg font-bold">Momo</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}


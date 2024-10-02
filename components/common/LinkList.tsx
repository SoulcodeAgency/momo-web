import Link from 'next/link';

interface LinkItem {
  href: string;
  text: string;
}

interface LinkListProps {
  links: LinkItem[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default LinkList;
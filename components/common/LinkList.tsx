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
        <div key={index} className="gradient-text">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
            {link.text}
          </Link>
        </div>
      ))}
    </>
  );
};

export default LinkList;

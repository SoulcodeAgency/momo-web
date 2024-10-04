import { CheckCircle2 } from "lucide-react";

export type ListItemProps = {
  children: React.ReactNode;
}

// TODO: We might want to extend the list icon to be configurable
export default function ListItem({ children }: ListItemProps) {
  return <li className="flex items-center justify-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> {children} </li>;
};
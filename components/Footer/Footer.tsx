import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/const/constants";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-8 bg-secondary font-varela">
      <ul className="flex gap-16">
        {NAV_LINKS.map((link) => (
          <li key={link.name} className="text-center text-gray-800">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-6">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name} className="text-center">
            <Link href={link.href}>
              <Image src={link.icon} alt={link.name} width={24} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

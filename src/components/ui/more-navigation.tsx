import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
  description: string;
  image: string;
}

export const MoreNav = ({ name, href, description, image }: Props) => {
  return (
    <li className="relative rounded-md lg:h-60 h-25 w-full overflow-hidden cursor-pointer group">
      <Link href={href}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="absolute bottom-4 left-4 space-y-1">
          <p className="text-lg font-medium">{name}</p>
          <span className="text-sm text-muted-foreground group-hover:text-accent-foreground">
            {description}
          </span>
        </div>
      </Link>
    </li>
  );
};

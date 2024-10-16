import Link from "next/link";
import clsx from "clsx";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566181745108",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/0rtusfinance/",
    icon: BsInstagram,
  },
  { title: "Twitter", href: "https://twitter.com", icon: BsTwitter },
  { title: "WhatsApp", href: "https://wa.me/9366038055", icon: BsWhatsapp },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;

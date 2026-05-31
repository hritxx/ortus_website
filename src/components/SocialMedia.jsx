import Link from "next/link";
import clsx from "clsx";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Button from "./Button";

export const SocialMediaProfiles = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566181745108",
    icon: Facebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/0rtusfinance/",
    icon: Instagram,
  },
  { title: "WhatsApp", href: "https://wa.me/9366038055", icon: MessageCircle },
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
            <item.icon className="h-6 w-6" />
          </Link>
        </li>
      ))}
      <li>
        <Button href={"https://app.ortusfinance.in"} invert={invert}>
          Login
        </Button>
      </li>
    </ul>
  );
};

export default SocialMedia;

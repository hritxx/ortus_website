import { cn } from "@/lib/utils";
import {
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import { StatListItem } from "./StatList";

export const FeaturesSectionDemo = () => {
  const features = [
    {
      title: "Higher Returns",
      description:
        "Earn up to 25% p.a., surpassing traditional investment options.",
      icon: <IconCurrencyRupee />,
    },
    // {
    //   title: "Customized Strategies",
    //   description:
    //     "Tailored plans that match your financial goals and risk appetite.",
    //   icon: <IconAdjustmentsBolt />,
    // },
    // {
    //   title: "Expert Management",
    //   description:
    //     "Our skilled team optimizes your portfolio for the best returns.",
    //   icon: <IconTerminal2 />,
    // },
    {
      title: "Risk Management",
      description:
        "Structured asset allocation minimizes risks and ensures steady growth.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Trust & Transparency",
      description:
        "We keep you informed at every step, building a partnership based on trust.",
      icon: <IconHeart />,
    },
    {
      title: "Experienced Traders",
      description:
        "Over 10 years of experience in the market, ensuring expertise in every move.",
      icon: <IconHelp />,
    },
    // {
    //   title: "Tax Benefits",
    //   description: "Additional services to help you save tax on your gains.",
    //   icon: <IconCloud />,
    // },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

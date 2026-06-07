"use client";
import { usePathname } from "next/navigation";
import { useId, useState, useRef, useEffect } from "react";
import { LazyMotion, domMax, MotionConfig } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import Image from "next/image";

const BANNER_KEY = "ortus_banner_dismissed";

/**
 * Top announcement banner — "Applications Open, Openings Filling Fast!"
 * Dismissible, persisted to sessionStorage.
 */
const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem(BANNER_KEY, "true");
    setVisible(false);
  };

  const bannerItem = (
    <div className="flex items-center gap-2 shrink-0 px-8">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="rainbow-text-global text-[11px] sm:text-xs font-black tracking-wide select-none">
        Applications Open — Openings Filling Fast!
      </span>
      <span className="rainbow-glaze-btn-global rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-md select-none">
        Apply Now →
      </span>
    </div>
  );

  return (
    <div className="relative z-50 w-full bg-[#0a0a0a] overflow-hidden border-b border-white/5 py-1.5">
      <a
        href="https://elevate.ortusfinance.in"
        target="_blank"
        rel="noopener noreferrer"
        className="marquee-container-global block w-full no-underline"
      >
        <div className="marquee-content-global flex">
          {/* Group 1 */}
          <div className="flex shrink-0">
            {bannerItem}
            {bannerItem}
            {bannerItem}
            {bannerItem}
          </div>
          {/* Group 2 (Duplicate for seamless left-to-right scrolling) */}
          <div className="flex shrink-0">
            {bannerItem}
            {bannerItem}
            {bannerItem}
            {bannerItem}
          </div>
        </div>
      </a>
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full
                   text-white/60 hover:text-white hover:bg-white/10 transition cursor-pointer z-20"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
};

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  const [logoError, setLogoError] = useState(false);
  //container
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo — swaps to the white variant inside the inverted (dark) menu panel.
            Falls back to plain "ORTUS FINANCE" text only if the image fails to load. */}
        <Link href={"/"} aria-label="ORTUS FINANCE — Home">
          {logoError ? (
            <span
              className={clsx(
                "font-bold text-xl sm:text-2xl tracking-tight",
                invert ? "text-white" : "text-neutral-950"
              )}
            >
              ORTUS FINANCE
            </span>
          ) : (
            <Image
              src={invert ? "/images/logo-1.png" : "/images/logo.png"}
              alt="ORTUS FINANCE"
              width={236}
              height={140}
              priority={!invert}
              onError={() => setLogoError(true)}
              className="h-16 w-auto sm:h-20"
            />
          )}
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href={"/contact"} invert={invert}>
            Register
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-blue-900/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-6 w-6",
                invert
                  ? "text-white group-hover:text-neutral-200"
                  : "text-neutral-950 group-hover:text-neutral-700"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-1 sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};
const Navigation = () => {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        {/* <NavigationItem href={"/work"}>Our Work</NavigationItem> */}
        <NavigationItem href={"/about"}>About Us</NavigationItem>
        <NavigationItem href={"/careers"}>Careers</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={"/tools"}>Tools</NavigationItem>
        <NavigationItem href={"/process"}>Our Process</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={"/licenses"}>Licenses</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.herf === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <>
      <header>
        {/* Announcement Banner */}
        <AnnouncementBanner />
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          {/* Header */}
          <Header
            panelId={panelId}
            icon={Menu}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>
        <div
          id={panelId}
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
          className={clsx(
            "absolute inset-x-0 top-0 z-50 overflow-hidden bg-neutral-950 pt-2 transition-[transform,opacity] duration-300 ease-out transform",
            expanded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={X}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-1 sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </header>
      <div className="relative flex flex-auto overflow-hidden bg-white pt-14 [border-top-left-radius:40px] [border-top-right-radius:40px]">
        <div className="relative isolate flex w-full flex-col pt-9">
          <main className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <RootLayoutInner key={pathname}>
          {children}
        </RootLayoutInner>
      </MotionConfig>
    </LazyMotion>
  );
};

export default RootLayout;

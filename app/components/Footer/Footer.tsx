import { Link } from "@remix-run/react";
import { AiFillGithub } from "react-icons/ai";

import type { User } from "@prisma/client";
import type { LinkProps } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

type FooterProps = {
  user: User | null;
};

export const AUTH_LINKS = [
  { href: ROUTE.DASHBOARD, text: "Dashboard" },
  { href: ROUTE.HELP, text: "Help" },
];

export const PUBLIC_AUTH_LINKS = [
  { href: ROUTE.EVENTS, text: "Events" },
  { href: ROUTE.FEATURES, text: "Features" },
  { href: ROUTE.PRICING, text: "Pricing" },
  { href: ROUTE.SIGN_IN, text: "Sign In" },
  { href: ROUTE.SIGN_UP, text: "Create Account" },
];

const FooterLink: React.FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <Link
      {...linkProps}
      className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
    >
      {children}
    </Link>
  );
};

export const Footer = ({ user }: FooterProps) => {
  return (
    <footer className="h-[150px] w-full max-w-5xl mx-auto py-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-stretch border-t border-slate-100">
      <div className="flex flex-col text-center md:text-left">
        <Link
          to={ROUTE.HOME}
          className="text-xl text-gray-900 font-semibold mb-2"
        >
          DiEvent
        </Link>

        <span className="text-sm text-gray-500">
          Manage your events, anywhere.
        </span>
      </div>

      <nav className="flex md:flex-1 flex-col justify-between items-end">
        <ul className="hidden md:flex space-x-6">
          {user ? (
            <>
              {AUTH_LINKS.map(({ href, text }) => (
                <li key={text}>
                  <FooterLink to={href}>{text}</FooterLink>
                </li>
              ))}
            </>
          ) : (
            <>
              {PUBLIC_AUTH_LINKS.map(({ href, text }) => (
                <li key={text}>
                  <FooterLink to={href}>{text}</FooterLink>
                </li>
              ))}
            </>
          )}
        </ul>

        <div className="flex items-center space-x-6">
          <span className="text-xs text-gray-400">
            &#169; 2022 DiEvent. All rights reserved.
          </span>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DevCeur/dievent"
          >
            <AiFillGithub className="text-2xl text-gray-500 hover:text-brand-500 transition-colors" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

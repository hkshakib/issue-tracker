"use client";

import React from "react";
import { GiBugNet } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import classNames from "classnames";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  const { status, data: session } = useSession();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiBugNet />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-gray-400": link.href !== currentPath,
                "text-black": link.href == currentPath,
                "hover:text-black transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (<Link href="/api/auth/signout">Log Out</Link>)}
        {status === "authenticated" || (<Link href="/api/auth/signin">Sign In</Link>)}
      </Box>
    </nav>
  );
};

export default NavBar;

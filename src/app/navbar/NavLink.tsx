"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    href: string;
    label: string;
};

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname();
    console.log("pathname:::", pathname); // It's good to keep this for debugging
    return (
        <NavbarItem isActive={pathname === href} as={Link} href={href}>
            {label}
        </NavbarItem>
    );
}
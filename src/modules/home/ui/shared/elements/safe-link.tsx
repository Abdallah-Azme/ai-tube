import Link from "next/link";
import React from "react";

interface ISafeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function SafeLink({
  children,
  href = "#",
  ...props
}: ISafeLinkProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

import React from "react";

interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

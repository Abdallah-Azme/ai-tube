"use client";
import { trpc } from "@/trpc/client";
import React from "react";

export default function Client() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "TRPC IS CONFUSING" });
  console.log({ data });
  return <div>client</div>;
}

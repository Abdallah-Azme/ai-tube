import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import Client from "./client";
import { ErrorBoundary } from "react-error-boundary";
export default async function page() {
  void trpc.hello.prefetch({ text: "TRPC IS CONFUSING" });

  return (
    <div>
      <HydrateClient>
        <Suspense fallback="loading....">
          <ErrorBoundary fallback={<p>error</p>}>
            <Client />
          </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </div>
  );
}

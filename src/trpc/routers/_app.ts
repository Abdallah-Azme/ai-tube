import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z
        .object({
          text: z.string(),
        })
        .optional()
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input?.text}`,
      };
    }),
  helloWorld: baseProcedure
    .input(
      z
        .object({
          name: z.string(),
        })
        .optional()
    )
    .query((opts) => {
      return {
        justTesting: `hello ${opts.input?.name ?? "world"}`,
      };
    }),
  testMutation: baseProcedure
    .input(z.object({ text: z.string().length(5) }))
    .mutation((opts) => {
      return {
        text: opts.input.text,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

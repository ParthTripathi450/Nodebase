import { inngest } from '@/inngest/client';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';

export const appRouter = createTRPCRouter({
  testAi: baseProcedure.mutation(async ()=>{
    await inngest.send({
      name: "execute/ai",
      });
      return {success:true,message:"job queued" }
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async ()=>{

    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "parth@mail.com",
      },
    })

    return {success:true,message:"job queued" }
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
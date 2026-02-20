// This file is SAFE for the browser.
// Do NOT import from Prisma here.

export const NodeType = {
    INITIAL: "INITIAL",
  } as const;
  
  export type NodeType = (typeof NodeType)[keyof typeof NodeType];
import { NodeType as PrismaNodeType } from "@/generated/prisma/client";
import { NodeType as UiNodeType } from "@/shared/node-type";

export function toPrismaNodeType(type: UiNodeType): PrismaNodeType {
  return type as PrismaNodeType;
}


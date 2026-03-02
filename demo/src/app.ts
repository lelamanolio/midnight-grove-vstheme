/* TS demo: interfaces, types, enums, generics */
export type ID = string | number;

export interface User {
  id: ID;
  name: string;
  roles: Array<"admin" | "user">;
  meta?: Record<string, unknown>;
}

export enum Status {
  Idle = "IDLE",
  Loading = "LOADING",
  Done = "DONE",
}

export function groupBy<T, K extends string | number>(
  items: T[],
  key: (item: T) => K
): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const k = key(item);
    (acc[k] ??= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

const users: User[] = [
  { id: 1, name: "Lela", roles: ["admin"], meta: { active: true } },
  { id: "2", name: "Nox", roles: ["user"] },
];

console.log(groupBy(users, (u) => u.roles[0]));

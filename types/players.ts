interface Player {
  name: string | undefined;
  group:
    | "church"
    | "sarah"
    | "esther"
    | "daniel"
    | "john"
    | "Y.A."
    | "youth"
    | undefined;
  average: number | undefined;
  family?: string;
  friend?: string;
}

export { Player };

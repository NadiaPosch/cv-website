import { FC, ReactNode } from "react";

export const Section: FC<{ children: ReactNode }> = ({ children }) => (
  <section className="min-h-screen">{children}</section>
);

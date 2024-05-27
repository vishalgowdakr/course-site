'use client'

import "~/styles/globals.css";
import { RecoilRoot } from "recoil"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
}

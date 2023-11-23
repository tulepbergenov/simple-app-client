import { Providers } from "@/core/providers";
import { IChildren } from "@/shared/types";
import { appTitle } from "@/shared/utils";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Generated by create next app",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A202C",
  colorScheme: "light",
};

const RootLayout = ({ children }: IChildren) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

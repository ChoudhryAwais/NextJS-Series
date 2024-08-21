import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Awais Wesbite",
  description: "In this website you came to know about nextjs.......",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        Root layout  
        {children}
      </body>
    </html>
  );
}

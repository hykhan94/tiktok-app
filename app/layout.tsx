import AllOverlay from "./components/AllOverlays";
import UserProvider from "./context/user";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Clone",
  description: "TikTok Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverlay />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}

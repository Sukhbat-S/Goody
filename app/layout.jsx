import { Roboto } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "@/contexts/HomeContext";

const robotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HomeContextProvider>
        <body className={`${robotoFont.className} antialiased `}>
          {children}
        </body>
      </HomeContextProvider>
    </html>
  );
}

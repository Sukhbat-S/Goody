import HomeContextProvider from "@/contexts/HomeContext";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const robotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nisdeg Coffee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HomeContextProvider>
        <body className={`${robotoFont.className} antialiased `}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </HomeContextProvider>
    </html>
  );
}

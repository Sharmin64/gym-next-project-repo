import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navber from "./components/Shared/Navber";
import Footer from "./components/Shared/Footer";
import { Provider } from "react-redux";
import { store } from "./../redux/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "fitness gym",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Navber />
          <div className="mt-10">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

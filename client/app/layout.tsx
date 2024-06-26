 import type { Metadata } from "next";
import {Inter, Montserrat, Mulish, Open_Sans, Roboto} from "next/font/google";
import "../styles/globals.sass";
import StoreProvider from "@/components/providers/StoreProvider";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import React from "react";
 import BugReportIcon from "@/components/layout/BugReportIcon/BugReportIcon";


const roboto = Roboto({
 weight: '400',
 subsets: ['latin', 'cyrillic'],
})
const inter = Inter({
    weight: '400',
 subsets: ['latin', 'cyrillic'],
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <ReactQueryProvider>
                <StoreProvider>
                    <NavBar/>
                    {children}
                    <Footer/>
                        <BugReportIcon/>
                    <ToastContainer/>
                </StoreProvider>
          </ReactQueryProvider>
      </body>
    </html>
  );
}

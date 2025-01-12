import "./globals.css";

import ResponsiveNav from "./ui/navigation/ResponsiveNav";
import ResponsiveFooter from "./ui/footer/ResponsiveFooter";
import NavBar from "./ui/navigation/NavBar";
import Footer from "./ui/footer/Footer";

import { dm_sans, dm_serif_display, dm_serif_text } from "./utils/fonts";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "EZ Doctrine",
  description: "The free Christian online seminary for Reformed Dispensationalists",
  creator: "Billy Wood",
  keywords:['Christian', 'Evangelical', 'Reformed', 'Calvinist', 'Calvinism', 'Dispensationalism', 'Dispensationalist', 'Explain', 'Explanation', 'Bible', 'Scripture', 'Theology', 'Church', 'Doctrine', 'EZ Doctrine']
};

//<main className="mb-auto mx-auto px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-96">

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${dm_sans} ${dm_serif_display} ${dm_serif_text} antialiased overflow-x-hidden flex flex-col justify-between min-h-screen`}>
        
        <header className="sticky top-0">
          <NavBar />
          <ResponsiveNav />
        </header>
        
        <main className="mb-auto grow flex">
          <Suspense fallback={ <Loading /> }>
            {children}
          </Suspense>
        </main>
        
        <footer className="relative">
          <Footer />
          <ResponsiveFooter />
        </footer>
        
      </body>
    </html>
  );
}

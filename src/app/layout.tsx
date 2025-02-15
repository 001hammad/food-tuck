import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./Components/CartContext";
import { SearchProvider } from "./Components/searchContext";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./Components/CustomDesign/PageTransition";
import { ClerkProvider } from '@clerk/nextjs'
import { WishlistProvider } from "./Components/wishlistContext";

export const metadata: Metadata = {
  title: "FoodTuck",
  description: "Owner Name Hammad Hafeez",
  icons: {
    icon: "/favi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      >
         <WishlistProvider>
        <SearchProvider>
          <CartProvider>
            <Navbar /> {/* Navbar component */}
            <AnimatePresence mode="wait">
              <PageTransition>{children}</PageTransition>
            </AnimatePresence>
            <Footer /> {/* Footer component */}
          </CartProvider>
        </SearchProvider>
        </WishlistProvider>
      </body>
      
    </html>
    </ClerkProvider>
  );
}

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { WishlistProvider } from "./contexts/WishlistContext";
import Index from "./pages/Index";
import Coffee from "./pages/Coffee";
import Vapes from "./pages/Vapes";
import Honey from "./pages/Honey";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import { useEffect, useState } from "react";


const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/coffee" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <div className="flex-1">
                    <Coffee />
                  </div>
                  <Footer />
                </div>
              } />
              <Route path="/vapes" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <div className="flex-1">
                    <Vapes />
                  </div>
                  <Footer />
                </div>
              } />
              <Route path="/honey" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <div className="flex-1">
                    <Honey />
                  </div>
                  <Footer />
                </div>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
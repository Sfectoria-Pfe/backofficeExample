import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../apps/App";
import Auth from "../apps/Auth";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";

export default function Router() {
  const [user, setUser] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard/>}/>
            <Route path="products" element={<Product/>}/>
          </Route>

        ) : (
          <Route path="/" element={<Auth />}>
            
          </Route>
        )}
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  );
}

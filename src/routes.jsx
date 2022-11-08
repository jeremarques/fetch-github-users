import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UsersList /> } />
        <Route path="/users/:idName" element={ <UserDetails /> } />
      </Routes>
    </BrowserRouter>
  )
}
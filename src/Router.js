import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Article from "./Article";
import Articles from "./Articles";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/articles" element={<Articles />}>
         
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <OuletPage />,

    children: [
      { index: true, element: <Main /> },
      { path: "/booking", element: <Booking /> },
      { path: "/bookingcomplete", element: <BookingComplete /> },
      { path: "/hostingcomplete", element: <HostingComplete /> },
      { path: "/room/:id", element: <Detail /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },
]);

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);

export default App;

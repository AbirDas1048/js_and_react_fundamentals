import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  }
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router

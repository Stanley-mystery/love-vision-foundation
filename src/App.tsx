import { RouterProvider } from "react-router";
import router from "./router";
import { Suspense } from "react";
import { Spinner } from "./components/loaders";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

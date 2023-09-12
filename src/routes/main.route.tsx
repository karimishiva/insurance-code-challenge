import BaseLayout from "layout/BaseLAyout";
import SelectInsurance from "pages/select-insurance/SelectInsurance";
import SignUp from "pages/sign-up/Signup";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    //   errorElement: <NotFound />,
    children: [
      {
        element: <SignUp />,
        path: "/",
      },
      {
        element: <SelectInsurance />,
        path: "/select-insurance",
      },
    ],
  },
]);

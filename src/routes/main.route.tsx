import NotFound from "components/common/not-found/NotFound";
import BaseLayout from "layout/BaseLAyout";
import SelectCompany from "pages/select-company/SelectCompany";
import SelectDiscount from "pages/select-discount/SelectDiscount";
import SelectInsurance from "pages/select-insurance/SelectInsurance";
import SelectVehicle from "pages/select-vehicle/SelectVehicle";
import SignUp from "pages/sign-up/Signup";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <SignUp />,
        path: "/",
      },
      {
        element: <SelectInsurance />,
        path: "/select-insurance",
      },
      {
        element: <SelectVehicle />,
        path: "/select-vehicle",
      },
      {
        element: <SelectCompany />,
        path: "/select-company",
      },
      {
        element: <SelectDiscount />,
        path: "/select-discount",
      },
    ],
  },
]);

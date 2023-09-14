import { Toast } from "components/common/toast/Toast";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "routes/main.route";
import "../assets/styles/global.scss";
function App() {
  return (
    <div className='app'>
      <RouterProvider router={mainRouter} />
      <Toast />
    </div>
  );
}

export default App;

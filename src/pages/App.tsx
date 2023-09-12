import { RouterProvider } from "react-router-dom";
import { mainRouter } from "routes/main.route";
import "../assets/styles/global.scss";
function App() {
  return (
    <div className='app'>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;

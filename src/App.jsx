import router from "./router";
import { RouterProvider } from "react-router-dom";
import {StockContextProvider} from "./contexts/StokeContext";

function App() {
  return (
    <div className="app">
      <StockContextProvider>
        <RouterProvider router={router} />
      </StockContextProvider>
     
    </div>
  );
}

export default App;

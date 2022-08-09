import { Routes, Route, BrowserRouter } from "react-router-dom";
import Calculator from "./page/Calculator";

import _store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={_store}>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

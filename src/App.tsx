import { Router } from "@routes/Router";
import { Provider } from "react-redux";
import { store } from "./store";

import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </Provider>
  );
}

export default App;

import { Router } from "@routes/Router";

import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router />
    </NextUIProvider>
  );
}

export default App;

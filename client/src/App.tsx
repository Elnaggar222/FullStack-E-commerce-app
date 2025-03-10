import { Toaster } from "./components/ui/toaster";
import MainRoutes from "./routes/MainRoutes";
const App = () => {
  return (
    <>
      <MainRoutes />
      <Toaster />
    </>
  );
};

export default App;

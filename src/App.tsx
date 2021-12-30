import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "./firebase/config";
import { AppRouter } from "./routers/AppRouter";

initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;

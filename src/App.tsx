import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "./firebase/config";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;

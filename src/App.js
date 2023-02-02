import Counter from "./components/Counter";
import store from "./store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Provider store={store}>
      <>
        <Header />
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
      </>
    </Provider>
  );
}

export default App;

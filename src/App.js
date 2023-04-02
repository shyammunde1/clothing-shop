import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigatio/navigationbar.component";
import SingIn from "./routes/sing-in/sign-in.component";


const Shop = () => {
  return (
    <div>
      <h1>I am shop component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;

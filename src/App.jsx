import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

import { selectUser } from "./features/reducer/userSlice.js";
import Login from './components/Login'

const Home = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl text-center">Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl text-center">About</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl text-center">Contact</h1>
    </div>
  );
};

function App() {
  const user = useSelector(selectUser)
  console.log(user)
  return (

    <div className="App">
      <h1 className="text-2xl text-center">
        <Link className="text-red-500" to="/">Home </Link>
        |
        <Link className="text-blue-500" to="/about"> About </Link>
        |
        <Link className="text-green-500" to="/contact"> Contact </Link>
        |
        {user ?
          <Link className="text-purple-500" to="/login"> logout </Link>
          :
          <Link className="text-purple-500" to="/login"> Login </Link>
        }
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

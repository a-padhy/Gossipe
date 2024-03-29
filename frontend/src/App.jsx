import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

// axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.baseURL = "https://gossipe-rvjh.vercel.app/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;

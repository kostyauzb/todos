import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  
    <App />
    
    <ToastContainer position="top-right" limit={3} autoClose={1500}/>
  </>
);

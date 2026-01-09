import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
   const handleGoToAbout = () => {
    navigate("/about");
   };
   return <button onClick={handleGoToAbout}>Go To About</button>; 
} 
export default Login;


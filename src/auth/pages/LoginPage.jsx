import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate =useNavigate();

  const onLogin =() =>{
     navigate('/marvel',{
        replace:true
  });
  }

    return (
       <div className="container met-5">
         <h1>Login</h1>
         <hr />

         <button 
         className="btn btn-primary"
         onClick={ onLogin}>
            Login
         </button>
       </div>
    );
};

export default LoginPage;
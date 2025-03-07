import Header from "./Header";

const Login = () => {
    return (
        <div>
        <Header />

        <div className="absolute px-2 py-2 ">
            <img src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="logo" />

            
 
        </div>
             
        <form className="absolute w-5/12 p-12 my-36 bg-black mx-auto right-0 left-0 bg-opacity-70 rounded-lg">  
             <h1 className="font-bold text-white py-2 text-3xl">Sign In</h1>
              <input type= "text" placeholder="Enter your Email" text="required" 
              className="p-2 my-2 w-full" />
              <input type= "password" placeholder="Enter your Email" text="required" 
              className="p-2 my-2 w-full"/>
              <button className="p-4 my-4  text-white bg-red-700 w-full rounded-lg"
              > sign in </button>
            </form> 

       
        </div>
        
    )
};




export default Login;
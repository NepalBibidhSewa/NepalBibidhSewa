import  { useState, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/technicians/login", { email,  password });
      navigate('/professional-dashboard')
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login as a professional </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full"
              required
            />
          </div>
         
          <div className="mb-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-gray-600"
          >
            Sign in
          </Button>
        </form>
        <div className="py-3">
            <Link to='/user-signup'> 
            <span className="font-semi-bold text-xl hover:text-blue-500">Register as a user?</span>
            </Link>
           <Link to='/professional/signup'>
           <p className="font-semibold text-xl hover:text-blue-500 my-2">Create an account as professional</p>
          
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";  
import { Link } from "react-router-dom";

const UserSignup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/signup", { name, phone, password });
      // Handle successful signup (e.g., redirect to login or dashboard)
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create a account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Email"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <PhoneInput
              value={phone}
              onChange={setPhone}
              defaultCountry="NP"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg py-2 px-3"
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
            Sign Up
          </Button>
        </form>
        <div className="py-3">
            <Link to='/professional/signup'> 
            <span className="font-semi-bold text-xl hover:text-blue-500">Register as a professional?</span>
            </Link>
           <Link to='/user-login'>
           <p className="font-semibold text-xl hover:text-blue-500 my-2">Have an account, Sign in?</p>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;

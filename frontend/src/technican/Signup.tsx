import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; 
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [password, setPassword] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/technicians/register", { name, email, phoneNumber, password, specialty });
      // Handle successful signup (e.g., redirect to login or dashboard)
      setTimeout(() => {
        navigate('/professional-signin');
      }, 500)
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up as a Professional</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
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
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Specialty</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-2 px-3"
              required
            >
              <option value="" disabled>Select your specialty</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Mechanic">Mechanic</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-gray-600"
          >
            Sign Up
          </Button>
        </form>
        <div className="py-3 text-center">
            <Link to='/user-signup' className="font-semibold text-xl hover:text-yellow-600">
              Create an account as a user?
            </Link>
            <Link to ='/professional-signin'>
           <p className="font-semibold text-xl hover:text-blue-500 my-2">Have professional account? login </p>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;

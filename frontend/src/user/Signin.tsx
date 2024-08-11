import { useState, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      navigate("/user/profile");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message || "An error occurred. Please try again."
        );
        console.log(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login as a Customer
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="name"
              type="text"
              value={email}
              onChange={(e) => setName(e.target.value)}
              placeholder="Email"
              className="w-full"
              required
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full"
              required
              aria-label="Password"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-gray-600"
          >
            Sign In
          </Button>
        </form>
        <div className="py-3 text-center">
          <Link to="/professional/signup">
            <span className="text-xl font-semibold hover:text-blue-500">
              Register as a professional?
            </span>
          </Link>
          <Link to="/user-signup">
            <p className="text-xl font-semibold hover:text-blue-500 my-2">
              Create an account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

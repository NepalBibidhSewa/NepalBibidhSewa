import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admin/login', { username, password });
      const { token } = response.data;

      localStorage.setItem('token', token);

      // Redirect or perform other actions after successful login
      setLogin("Login successful");

      setTimeout(() => {
        navigate('/admin-panel');
      }, 500);
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 bg-white shadow-lg">
        <CardHeader className="mb-4 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
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
            {error && <p className="text-red-500 text-center">{error}</p>}
            {login && <p className="text-green-500 text-center">{login}</p>}
            <CardFooter>
              <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-600">
                Login
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;

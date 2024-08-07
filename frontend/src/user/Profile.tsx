import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('/api/user');
        setUser(userResponse.data);

        const servicesResponse = await axios.get('/api/services');
        setServices(servicesResponse.data);

        const activitiesResponse = await axios.get('/api/user/activities');
        setRecentActivities(activitiesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">User Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          {user ? (
            <div>
              <h2 className="text-xl font-semibold">Welcome, {user.name}</h2>
              <p className="mt-2">Email: {user.email}</p>
            </div>
          ) : (
            <p>Loading user information...</p>
          )}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Available Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {services.map((service) => (
              <li key={service.id} className="mt-2">
                {service.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="mt-2">
                {activity.description} on {new Date(activity.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;

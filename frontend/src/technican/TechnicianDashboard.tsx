const TechnicianDashboard = () => {
  const upcomingBookings = [
    { id: 1, service: 'Plumbing', date: '2024-08-10', time: '10:00 AM' },
    { id: 2, service: 'Electrical', date: '2024-08-11', time: '2:00 PM' },
  ];

  const recentActivity = [
    { id: 1, activity: 'Accepted a booking for Plumbing', time: '2 hours ago' },
    { id: 2, activity: 'Received a 5-star rating', time: '1 day ago' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Profile Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full w-20 h-20 mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Nepalgunj</p>
            <p className="text-gray-600">Rating: 4.8</p>
          </div>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Bookings</h3>
        {upcomingBookings.map((booking) => (
          <div key={booking.id} className="mb-2">
            <p className="text-gray-800">{booking.service}</p>
            <p className="text-gray-600">
              {booking.date} at {booking.time}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        {recentActivity.map((activity) => (
          <div key={activity.id} className="mb-2">
            <p className="text-gray-800">{activity.activity}</p>
            <p className="text-gray-600">{activity.time}</p>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
        <p className="text-gray-800">You have 2 new notifications</p>
      </div>
    </div>
  );
};

export default TechnicianDashboard;

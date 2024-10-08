import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Signup from "@/user/Signup";
import Register from "./technican/Signup";
import AllServices from "./services/AllServices";
import AdminLogin from "./admin/AdminLogin";
import AdminPanel from "./admin/AdminPanel";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Profile from "./user/Profile";
import About from "./pages/About";
import Signin from "./user/Signin";
import TechnicianSignin from './technican/Signin'
import TechnicianDashboard from "./technican/TechnicianDashboard";
import Laundry from "./services/Laundry";
import Marble from "./services/Marble";
import ServicePage from "./pages/ServicePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <AllServices />
          </Layout>
        }
      />
      <Route path="/user-signup" element={<Signup />} />
      <Route path="/professional/signup" element={<Register />} />
      <Route path="/professional-signin" element={<TechnicianSignin />} />
      <Route path="/user-login" element={<Signin/>} />
      <Route path="/sevices" element={<AllServices />} />
      <Route path="/sevices" element={<AllServices />} />
      <Route path="/about" element={<About />} />
      <Route path="/services/:servicenames" element={<Laundry />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin-panel"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route path="/user/profile" element= {<Profile/>}/>
      <Route path="/professional-dashboard" element={<TechnicianDashboard/>} />
      <Route path="/services-tile-Marbal" element={<Marble/>} />
      {/* dynamic route */}
      <Route path="/services/:location/:serviceName" element={<ServicePage />} />

      {/* External Routes */}
     
    </Routes>
  );
};

export default AppRoutes;

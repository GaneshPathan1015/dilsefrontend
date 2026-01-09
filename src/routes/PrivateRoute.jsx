import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; // or a spinner
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

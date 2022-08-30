import Home from "../components/Home";
import Profile from "../components/Profile";
import Properties from "../components/Properties";
import SignIn from "../components/SignIn";
import Generic from "../pages/Generic";

export const navbar = [
  { id: 1, title: "Home", element: <Home />, path: "/home", hidden: false },
  {
    id: 2,
    title: "Properties",
    element: <Properties />,
    path: "/properties",
    hidden: false,
  },
  {
    id: 3,
    title: "Contacts",
    element: <Generic />,
    path: "/contact",
    hidden: false,
  },
  {
    id: 4,
    title: "Sign In",
    element: <SignIn />,
    path: "/signin",
    hidden: true,
  },
  {
    id: 5,
    title: "Sign Up",
    element: <Generic />,
    path: "/signup",
    hidden: true,
  },
  {
    id: 5,
    title: "Profile",
    element: <Profile />,
    path: "/profile",
    hidden: true,
  },
];

import { Link,NavLink, useLocation } from "react-router";

export default function Navbar() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find a Job", path: "/jobs" },
    { name: "Recruiters", path: "/recruiters" },
    { name: "Candidates", path: "/candidates" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation(); 

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          CareerCode
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map( link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>



        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/register"
            className={({isActive})=> `hover:text-white hover:bg-blue-700 hover:transition  px-5 py-2 rounded-lg 

            ${isActive || location?.pathname == "/"  ? "bg-blue-600 text-white  hover:bg-blue-700 transition" : ""}`}
          >
            Register
          </NavLink>


          <NavLink
            to="/login"
            className={({isActive})=> `hover:text-white hover:bg-blue-700 hover:transition px-5 py-2 rounded-lg ${isActive ? "bg-blue-600 text-white hover:bg-blue-700 transition" : ""}`}
          >
            Sign in
          </NavLink>
        </div>







        {/* Mobile menu toggle */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}

      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col items-start p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-2 w-full">
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )} */}

      
    </nav>
  );
}

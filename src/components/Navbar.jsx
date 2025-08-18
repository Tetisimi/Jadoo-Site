// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
//         <Link to="/">
//           <img
//             src="/Jadoo-Site/assets/Logo.png"
//             alt="logo"
//             className="w-[115px] md:w-[140px]"
//           />
//         </Link>

//         <ul className="hidden lg:flex space-x-10 font-medium">
//           <li>
//             <a href="/">Destinations</a>
//           </li>
//           <li>
//             <a href="/">Hotels</a>
//           </li>
//           <li>
//             <a href="/">Flights</a>
//           </li>
//           <li>
//             <a href="/">Bookings</a>
//           </li>
//           <li>
//             <a href="/">Login</a>
//           </li>
//           <li>
//             <a href="/">Sign up</a>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
//           {isOpen ? '✖' : '☰'}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden bg-white shadow-lg mt-2 px-4 py-2 space-y-2">
//           <a href="/" className="block">
//             Destinations
//           </a>
//           <a href="/" className="block">
//             Hotels
//           </a>
//           <a href="/" className="block">
//             Flights
//           </a>
//           <a href="/" className="block">
//             Bookings
//           </a>
//           <a href="/" className="block">
//             Login
//           </a>
//           <a href="/" className="block">
//             Sign up
//           </a>
//           <li className="list-none">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      if (window.scrollY > screenHeight * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 p-4 ${
        scrolled ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <img
            src="/Jadoo-Site/assets/Logo.png"
            alt="logo"
            className="w-[115px] md:w-[140px]"
          />
        </Link>

        <ul className="hidden lg:flex space-x-10 font-medium">
          <li>
            <a href="/">Destinations</a>
          </li>
          <li>
            <a href="/">Hotels</a>
          </li>
          <li>
            <a href="/">Flights</a>
          </li>
          <li>
            <a href="/">Bookings</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2 px-4 py-2 space-y-2">
          <a href="/" className="block">
            Destinations
          </a>
          <a href="/" className="block">
            Hotels
          </a>
          <a href="/" className="block">
            Flights
          </a>
          <a href="/" className="block">
            Bookings
          </a>
          <a href="/" className="block">
            Login
          </a>
          <a href="/" className="block">
            Sign up
          </a>
          <li className="list-none">
            <Link to="/contact">Contact Us</Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react for icons

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  const handleNavClick = (slug) => {
    navigate(slug);
    setMenuOpen(false); // close menu after navigation
  };

  return (
    <header className="py-3 shadow bg-gray-500 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo width="150px" />
          </Link>

          {/* Hamburger Icon (visible on mobile only) */}
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Items (desktop) */}
          <ul className="hidden sm:flex ml-auto gap-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.slug)}
                      className="px-4 py-2 hover:bg-blue-100 hover:text-black rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.slug)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-100 hover:text-black rounded"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;

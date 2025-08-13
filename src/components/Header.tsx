import React from 'react';
import { Anchor, Menu, X, Users, Calendar, Trophy, Settings } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, isAdmin, toggleAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Anchor },
    { id: 'players', label: 'Crew', icon: Users },
    { id: 'matches', label: 'Battles', icon: Calendar },
    { id: 'leaderboard', label: 'Rankings', icon: Trophy },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Strawhats CC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-blue-700 text-yellow-400'
                      : 'hover:bg-blue-700 hover:text-yellow-300'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Admin Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleAdmin}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isAdmin
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
              }`}
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:block">{isAdmin ? 'Admin' : 'Player'}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-blue-700 text-yellow-400'
                        : 'hover:bg-blue-700 hover:text-yellow-300'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
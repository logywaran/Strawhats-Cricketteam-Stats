import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import MatchesPage from './components/MatchesPage';
import LeaderboardPage from './components/LeaderboardPage';
import AvailabilityModal from './components/AvailabilityModal';
import { mockPlayers, mockMatches } from './data/mockData';
import { Player, Match } from './types/cricket';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [players, setPlayers] = useState<Player[]>(mockPlayers);
  const [matches, setMatches] = useState<Match[]>(mockMatches);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleAvailabilityClick = (matchId: string) => {
    const match = matches.find(m => m.id === matchId);
    if (match) {
      setSelectedMatch(match);
      setIsAvailabilityModalOpen(true);
    }
  };

  const handleAvailabilitySubmit = (matchId: string, availability: 'Available' | 'Not Available' | 'Maybe') => {
    console.log(`Player marked ${availability} for match ${matchId}`);
    // In a real app, this would update the database
  };

  const handleEditPlayer = (player: Player) => {
    console.log('Editing player:', player);
    // In a real app, this would open an edit modal
  };

  const upcomingMatches = matches.filter(m => m.isUpcoming);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            upcomingMatches={upcomingMatches}
            onAvailabilityClick={handleAvailabilityClick}
          />
        );
      case 'players':
        return (
          <PlayersPage 
            players={players}
            isAdmin={isAdmin}
            onEditPlayer={handleEditPlayer}
          />
        );
      case 'matches':
        return <MatchesPage matches={matches} isAdmin={isAdmin} />;
      case 'leaderboard':
        return <LeaderboardPage players={players} />;
      default:
        return (
          <HomePage 
            upcomingMatches={upcomingMatches}
            onAvailabilityClick={handleAvailabilityClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isAdmin={isAdmin}
        toggleAdmin={toggleAdmin}
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderCurrentPage()}
      </main>

      <AvailabilityModal
        isOpen={isAvailabilityModalOpen}
        onClose={() => setIsAvailabilityModalOpen(false)}
        match={selectedMatch}
        onSubmit={handleAvailabilitySubmit}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">⚓ Strawhats Cricket Club ⚓</p>
          <p className="text-gray-400">Adventure awaits on every cricket field!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
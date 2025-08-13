import React from 'react';
import { Player } from '../types/cricket';
import PlayerCard from './PlayerCard';

interface PlayersPageProps {
  players: Player[];
  isAdmin: boolean;
  onEditPlayer?: (player: Player) => void;
}

const PlayersPage: React.FC<PlayersPageProps> = ({ players, isAdmin, onEditPlayer }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Meet the Crew</h1>
        <p className="text-xl text-gray-600">Our nakama who sail the cricket seas together</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isAdmin={isAdmin}
            onEdit={onEditPlayer}
          />
        ))}
      </div>

      {isAdmin && (
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Add New Crew Member
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayersPage;
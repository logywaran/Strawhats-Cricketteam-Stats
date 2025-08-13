import React from 'react';
import { Player } from '../types/cricket';
import { Edit, Award, Target, TrendingUp, Star } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  isAdmin?: boolean;
  onEdit?: (player: Player) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isAdmin, onEdit }) => {
  const getRoleColor = (role: string) => {
    const colors = {
      'Batsman': 'bg-green-100 text-green-800',
      'Bowler': 'bg-red-100 text-red-800',
      'All-rounder': 'bg-blue-100 text-blue-800',
      'Wicketkeeper': 'bg-yellow-100 text-yellow-800'
    };
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      {/* Player Header */}
      <div className="relative">
        <img
          src={player.photo}
          alt={player.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
          #{player.jerseyNumber}
        </div>
        {isAdmin && (
          <button
            onClick={() => onEdit?.(player)}
            className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300"
          >
            <Edit className="h-4 w-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Player Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRoleColor(player.role)}`}>
            {player.role}
          </span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            <span>Fav One Piece: {player.favoriteOne}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Award className="h-4 w-4 mr-2 text-blue-500" />
            <span>Cricket Hero: {player.roleModel}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Batting Stats */}
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <Target className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-xs font-semibold text-green-800">BATTING</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm">
                <span className="font-semibold">{player.battingStats.totalRuns}</span>
                <span className="text-gray-600 ml-1">runs</span>
              </div>
              <div className="text-xs text-gray-600">
                Avg: {player.battingStats.average.toFixed(1)}
              </div>
              <div className="text-xs text-gray-600">
                SR: {player.battingStats.strikeRate.toFixed(1)}
              </div>
            </div>
          </div>

          {/* Bowling Stats */}
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-4 w-4 text-red-600 mr-1" />
              <span className="text-xs font-semibold text-red-800">BOWLING</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm">
                <span className="font-semibold">{player.bowlingStats.totalWickets}</span>
                <span className="text-gray-600 ml-1">wkts</span>
              </div>
              <div className="text-xs text-gray-600">
                Best: {player.bowlingStats.bestBowling}
              </div>
              <div className="text-xs text-gray-600">
                Eco: {player.bowlingStats.economyRate.toFixed(1)}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap gap-2">
          {player.battingStats.hundreds > 0 && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
              {player.battingStats.hundreds} 100s
            </span>
          )}
          {player.battingStats.fifties > 0 && (
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-semibold">
              {player.battingStats.fifties} 50s
            </span>
          )}
          {player.battingStats.totalRuns > 1000 && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
              1K+ Club
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
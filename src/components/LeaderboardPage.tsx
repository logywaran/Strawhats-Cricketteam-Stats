import React from 'react';
import { Player } from '../types/cricket';
import { Trophy, Target, TrendingUp, Crown, Award, Star } from 'lucide-react';

interface LeaderboardPageProps {
  players: Player[];
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ players }) => {
  const topBatsmen = [...players]
    .sort((a, b) => b.battingStats.totalRuns - a.battingStats.totalRuns)
    .slice(0, 5);

  const topBowlers = [...players]
    .sort((a, b) => b.bowlingStats.totalWickets - a.bowlingStats.totalWickets)
    .slice(0, 5);

  const bestAverages = [...players]
    .sort((a, b) => b.battingStats.average - a.battingStats.average)
    .slice(0, 5);

  const LeaderboardCard: React.FC<{
    title: string;
    players: Player[];
    icon: React.ComponentType<any>;
    getStatValue: (player: Player) => number | string;
    statLabel: string;
    color: string;
  }> = ({ title, players, icon: Icon, getStatValue, statLabel, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <div className={`${color} p-2 rounded-lg mr-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {players.map((player, index) => (
          <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                index === 0 ? 'bg-yellow-500' : 
                index === 1 ? 'bg-gray-400' : 
                index === 2 ? 'bg-orange-500' : 'bg-blue-500'
              }`}>
                {index + 1}
              </div>
              <img
                src={player.photo}
                alt={player.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{player.name}</p>
                <p className="text-sm text-gray-600">{player.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-800">{getStatValue(player)}</p>
              <p className="text-xs text-gray-500">{statLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Crew Rankings</h1>
        <p className="text-xl text-gray-600">Our strongest nakama leading the charts</p>
      </div>

      {/* Champion Card */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white rounded-xl p-8 text-center">
        <Crown className="h-16 w-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Current MVP</h2>
        <div className="flex items-center justify-center space-x-4">
          <img
            src={topBatsmen[0]?.photo}
            alt={topBatsmen[0]?.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-white"
          />
          <div className="text-left">
            <p className="text-2xl font-bold">{topBatsmen[0]?.name}</p>
            <p className="text-yellow-100">{topBatsmen[0]?.battingStats.totalRuns} runs this season</p>
          </div>
        </div>
      </div>

      {/* Leaderboards Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <LeaderboardCard
          title="Top Run Scorers"
          players={topBatsmen}
          icon={Target}
          getStatValue={(player) => player.battingStats.totalRuns}
          statLabel="runs"
          color="bg-green-600"
        />

        <LeaderboardCard
          title="Top Wicket Takers"
          players={topBowlers}
          icon={TrendingUp}
          getStatValue={(player) => player.bowlingStats.totalWickets}
          statLabel="wickets"
          color="bg-red-600"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <LeaderboardCard
          title="Best Batting Averages"
          players={bestAverages}
          icon={Star}
          getStatValue={(player) => player.battingStats.average.toFixed(1)}
          statLabel="average"
          color="bg-blue-600"
        />

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="bg-purple-600 p-2 rounded-lg mr-3">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Team Achievements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Trophy className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800">Total Victories</p>
                  <p className="text-sm text-gray-600">This season</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">15</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Team Runs</p>
                  <p className="text-sm text-gray-600">Combined total</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">4,500</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-800">Team Wickets</p>
                  <p className="text-sm text-gray-600">Combined total</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-red-600">127</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
import React from 'react';
import { Match } from '../types/cricket';
import { Calendar, MapPin, Clock, Trophy, Eye, Plus } from 'lucide-react';

interface MatchesPageProps {
  matches: Match[];
  isAdmin: boolean;
}

const MatchesPage: React.FC<MatchesPageProps> = ({ matches, isAdmin }) => {
  const upcomingMatches = matches.filter(m => m.isUpcoming);
  const pastMatches = matches.filter(m => !m.isUpcoming);

  const getResultColor = (result?: string) => {
    const colors = {
      'Win': 'bg-green-100 text-green-800',
      'Loss': 'bg-red-100 text-red-800',
      'Draw': 'bg-yellow-100 text-yellow-800',
      'Abandoned': 'bg-gray-100 text-gray-800'
    };
    return colors[result as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const MatchCard: React.FC<{ match: Match; isUpcoming: boolean }> = ({ match, isUpcoming }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${isUpcoming ? 'border-l-4 border-blue-500' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">vs {match.opponent}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(match.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {match.time}
            </div>
          </div>
        </div>
        {!isUpcoming && match.result && (
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getResultColor(match.result)}`}>
            {match.result}
          </span>
        )}
      </div>

      <div className="flex items-center mb-4">
        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
        <span className="text-gray-600">{match.venue}</span>
      </div>

      {match.scorecard && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">STRAWHATS</p>
              <p className="font-bold text-lg text-blue-600">
                {match.scorecard.strawhatsScore.total}/{match.scorecard.strawhatsScore.wickets}
              </p>
              <p className="text-xs text-gray-500">({match.scorecard.strawhatsScore.overs} overs)</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">{match.opponent.toUpperCase()}</p>
              <p className="font-bold text-lg text-red-600">
                {match.scorecard.opponentScore.total}/{match.scorecard.opponentScore.wickets}
              </p>
              <p className="text-xs text-gray-500">({match.scorecard.opponentScore.overs} overs)</p>
            </div>
          </div>
        </div>
      )}

      {match.highlights && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
          <p className="text-sm text-gray-700">{match.highlights}</p>
        </div>
      )}

      <div className="flex space-x-2">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex-1">
          <Eye className="h-4 w-4" />
          <span>View Details</span>
        </button>
        {isAdmin && (
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
            Edit
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Battle History</h1>
          <p className="text-xl text-gray-600">Our adventures on the cricket seas</p>
        </div>
        {isAdmin && (
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            <Plus className="h-5 w-5" />
            <span>Add Match</span>
          </button>
        )}
      </div>

      {/* Upcoming Matches */}
      {upcomingMatches.length > 0 && (
        <div>
          <div className="flex items-center mb-6">
            <Trophy className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Battles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} isUpcoming={true} />
            ))}
          </div>
        </div>
      )}

      {/* Past Matches */}
      {pastMatches.length > 0 && (
        <div>
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-gray-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Past Battles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastMatches.map((match) => (
              <MatchCard key={match.id} match={match} isUpcoming={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchesPage;
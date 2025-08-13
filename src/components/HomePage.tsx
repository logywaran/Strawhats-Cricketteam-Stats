import React from 'react';
import { Calendar, MapPin, Clock, Star, Target, Award } from 'lucide-react';
import { Match } from '../types/cricket';

interface HomePageProps {
  upcomingMatches: Match[];
  onAvailabilityClick: (matchId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ upcomingMatches, onAvailabilityClick }) => {
  const nextMatch = upcomingMatches[0];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Strawhats Cricket Club</h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            "We're gonna be the King of the Pirates... and Cricket Champions!"
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold">
              <Star className="h-5 w-5" />
              <span>Established 2024</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-full">
              <Target className="h-5 w-5" />
              <span>Adventure & Victory</span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Match Card */}
      {nextMatch && (
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            Next Battle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">vs {nextMatch.opponent}</p>
                  <p className="text-sm text-gray-600">Away Battle</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{new Date(nextMatch.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600">Match Date</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{nextMatch.time}</p>
                  <p className="text-sm text-gray-600">Start Time</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{nextMatch.venue}</p>
                  <p className="text-sm text-gray-600">Venue</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => onAvailabilityClick(nextMatch.id)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Mark Availability
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Team Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">15</h3>
          <p className="text-gray-600">Battles Won</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">2,450</h3>
          <p className="text-gray-600">Total Runs</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">8</h3>
          <p className="text-gray-600">Active Crew</p>
        </div>
      </div>

      {/* Team Motto */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Pirate Code</h2>
        <p className="text-xl mb-4">
          "Just like how we sail the Grand Line together, we play cricket as one crew!"
        </p>
        <p className="text-lg opacity-90">
          Every match is an adventure, every run is a treasure, and every wicket is a victory for our nakama!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
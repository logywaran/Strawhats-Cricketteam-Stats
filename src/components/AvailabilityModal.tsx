import React, { useState } from 'react';
import { X, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Match } from '../types/cricket';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: Match | null;
  onSubmit: (matchId: string, availability: 'Available' | 'Not Available' | 'Maybe') => void;
}

const AvailabilityModal: React.FC<AvailabilityModalProps> = ({ isOpen, onClose, match, onSubmit }) => {
  const [selectedAvailability, setSelectedAvailability] = useState<'Available' | 'Not Available' | 'Maybe' | null>(null);

  if (!isOpen || !match) return null;

  const handleSubmit = () => {
    if (selectedAvailability) {
      onSubmit(match.id, selectedAvailability);
      setSelectedAvailability(null);
      onClose();
    }
  };

  const options = [
    {
      value: 'Available' as const,
      label: 'Available',
      icon: CheckCircle,
      color: 'bg-green-100 hover:bg-green-200 border-green-300',
      selectedColor: 'bg-green-500 text-white',
      iconColor: 'text-green-600'
    },
    {
      value: 'Not Available' as const,
      label: 'Not Available',
      icon: XCircle,
      color: 'bg-red-100 hover:bg-red-200 border-red-300',
      selectedColor: 'bg-red-500 text-white',
      iconColor: 'text-red-600'
    },
    {
      value: 'Maybe' as const,
      label: 'Maybe',
      icon: HelpCircle,
      color: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300',
      selectedColor: 'bg-yellow-500 text-white',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Mark Your Availability</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Match Info */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">vs {match.opponent}</h3>
            <p className="text-sm text-gray-600">{new Date(match.date).toLocaleDateString()} at {match.time}</p>
            <p className="text-sm text-gray-600">{match.venue}</p>
          </div>

          {/* Availability Options */}
          <div className="space-y-3 mb-6">
            <p className="font-semibold text-gray-700 mb-3">Select your availability:</p>
            {options.map((option) => {
              const IconComponent = option.icon;
              const isSelected = selectedAvailability === option.value;
              
              return (
                <button
                  key={option.value}
                  onClick={() => setSelectedAvailability(option.value)}
                  className={`w-full p-4 rounded-lg border-2 flex items-center space-x-3 transition-all duration-300 ${
                    isSelected ? option.selectedColor : option.color
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isSelected ? 'text-white' : option.iconColor}`} />
                  <span className={`font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedAvailability}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedAvailability
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityModal;
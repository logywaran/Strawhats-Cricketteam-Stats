import { Player, Match } from '../types/cricket';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Monkey D. Luffy',
    jerseyNumber: 1,
    role: 'All-rounder',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    favoriteOne: 'Monkey D. Luffy',
    roleModel: 'MS Dhoni',
    battingStats: {
      totalRuns: 1250,
      matchesPlayed: 45,
      highestScore: 112,
      average: 32.89,
      strikeRate: 145.2,
      fifties: 8,
      hundreds: 2
    },
    bowlingStats: {
      totalWickets: 25,
      bestBowling: '4/23',
      economyRate: 6.8,
      average: 28.5,
      strikeRate: 25.2
    }
  },
  {
    id: '2',
    name: 'Roronoa Zoro',
    jerseyNumber: 3,
    role: 'Batsman',
    photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    favoriteOne: 'Roronoa Zoro',
    roleModel: 'Virat Kohli',
    battingStats: {
      totalRuns: 1850,
      matchesPlayed: 48,
      highestScore: 145,
      average: 42.05,
      strikeRate: 132.8,
      fifties: 12,
      hundreds: 4
    },
    bowlingStats: {
      totalWickets: 2,
      bestBowling: '1/15',
      economyRate: 8.2,
      average: 65.0,
      strikeRate: 48.0
    }
  },
  {
    id: '3',
    name: 'Vinsmoke Sanji',
    jerseyNumber: 5,
    role: 'Wicketkeeper',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    favoriteOne: 'Vinsmoke Sanji',
    roleModel: 'MS Dhoni',
    battingStats: {
      totalRuns: 980,
      matchesPlayed: 40,
      highestScore: 89,
      average: 28.82,
      strikeRate: 125.6,
      fifties: 6,
      hundreds: 0
    },
    bowlingStats: {
      totalWickets: 0,
      bestBowling: '0/0',
      economyRate: 0,
      average: 0,
      strikeRate: 0
    }
  },
  {
    id: '4',
    name: 'Usopp',
    jerseyNumber: 8,
    role: 'Bowler',
    photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    favoriteOne: 'God Usopp',
    roleModel: 'Jasprit Bumrah',
    battingStats: {
      totalRuns: 420,
      matchesPlayed: 35,
      highestScore: 45,
      average: 15.55,
      strikeRate: 108.7,
      fifties: 0,
      hundreds: 0
    },
    bowlingStats: {
      totalWickets: 52,
      bestBowling: '5/18',
      economyRate: 5.8,
      average: 22.1,
      strikeRate: 22.8
    }
  }
];

export const mockMatches: Match[] = [
  {
    id: '1',
    opponent: 'Marine Force XI',
    date: '2024-01-15',
    time: '14:00',
    venue: 'Grand Line Cricket Ground',
    result: 'Win',
    isUpcoming: false,
    scorecard: {
      strawhatsScore: { total: 185, wickets: 6, overs: 20 },
      opponentScore: { total: 165, wickets: 8, overs: 20 },
      playerPerformances: []
    },
    highlights: 'Luffy\'s magnificent century led the crew to victory!'
  },
  {
    id: '2',
    opponent: 'Baroque Works CC',
    date: '2024-01-28',
    time: '15:30',
    venue: 'Alabasta Stadium',
    result: 'Win',
    isUpcoming: false,
    scorecard: {
      strawhatsScore: { total: 210, wickets: 4, overs: 20 },
      opponentScore: { total: 195, wickets: 9, overs: 20 },
      playerPerformances: []
    },
    highlights: 'Zoro\'s explosive batting display!'
  },
  {
    id: '3',
    opponent: 'CP9 Cricket Club',
    date: '2024-02-15',
    time: '16:00',
    venue: 'Water 7 Arena',
    isUpcoming: true
  }
];
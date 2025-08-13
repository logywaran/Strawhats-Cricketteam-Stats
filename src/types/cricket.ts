export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';
  photo: string;
  favoriteOne: string; // Favorite One Piece character
  roleModel: string; // Cricket role model
  battingStats: {
    totalRuns: number;
    matchesPlayed: number;
    highestScore: number;
    average: number;
    strikeRate: number;
    fifties: number;
    hundreds: number;
  };
  bowlingStats: {
    totalWickets: number;
    bestBowling: string;
    economyRate: number;
    average: number;
    strikeRate: number;
  };
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  result?: 'Win' | 'Loss' | 'Draw' | 'Abandoned';
  isUpcoming: boolean;
  scorecard?: Scorecard;
  highlights?: string;
}

export interface Scorecard {
  strawhatsScore: {
    total: number;
    wickets: number;
    overs: number;
  };
  opponentScore: {
    total: number;
    wickets: number;
    overs: number;
  };
  playerPerformances: PlayerPerformance[];
}

export interface PlayerPerformance {
  playerId: string;
  batting: {
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
  };
  bowling: {
    wickets: number;
    overs: number;
    runs: number;
  };
}

export interface AvailabilityPoll {
  matchId: string;
  responses: {
    [playerId: string]: 'Available' | 'Not Available' | 'Maybe';
  };
}
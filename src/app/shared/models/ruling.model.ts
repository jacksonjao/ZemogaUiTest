export interface RulingModel {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  positiveVotes: number;
  negativeVotes: number;
  totalVotes: number;
  lastVote: number;
  positiveAverage?: any;
  negativeAverage?: any;
}

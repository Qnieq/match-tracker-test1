import axios from 'axios';
import { Match } from '../types/match.types';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export interface SuccessfulResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}

export const fetchMatchesAPI = async (): Promise<Match[]> => {
  const response = await apiClient.get<SuccessfulResponse>('/fronttemp');
  return response.data.data.matches;
};

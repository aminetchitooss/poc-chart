import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://strong-pig-76.deno.dev',
  params: { api_key: 'API_KEY' }
});

export const getReporting = async (): Promise<Mesures> => {
  const resp = await axiosInstance.get(``);
  return resp.data;
};

interface Mesure {
  date: string;
  value: number;
}

export interface Mesures {
  bids: Mesure[];
  lotsBidded: Mesure[];
  ordersWon: Mesure[];
  ordersLost: Mesure[];
}

import axios from 'axios';
import { ParameterKeys } from '../TraderDashboard/Parameters';

interface Mesure {
  date: string;
  value: number;
}

type EnumToObject<T> = {
  [Property in ParameterKeys]: T;
};

export type CartMesure = EnumToObject<Mesure[]>;

export const axiosInstance = axios.create({
  baseURL: 'https://strong-pig-76.deno.dev',
  params: { api_key: 'API_KEY' }
});

export const getReporting = async (): Promise<CartMesure> => {
  const data: CartMesure = {
    ordersLost: [
      { date: '2022-01-01T04:00:00Z', value: 5 },
      { date: '2022-02-01T04:00:00Z', value: 3 },
      { date: '2022-03-01T04:00:00Z', value: 8 },
      { date: '2022-04-01T04:00:00Z', value: 5 },
      { date: '2022-05-01T04:00:00Z', value: 1 },
      { date: '2022-06-01T04:00:00Z', value: 2 },
      { date: '2022-07-01T04:00:00Z', value: 3 },
      { date: '2022-08-01T04:00:00Z', value: 8 },
      { date: '2022-09-01T04:00:00Z', value: 5 },
      { date: '2022-10-01T04:00:00Z', value: 6 },
      { date: '2022-11-01T04:00:00Z', value: 7 },
      { date: '2022-12-01T04:00:00Z', value: 2 }
    ],
    ordersWon: [
      { date: '2022-01-01T04:00:00Z', value: 0 },
      { date: '2022-02-01T04:00:00Z', value: 12 },
      { date: '2022-03-01T04:00:00Z', value: 10 },
      { date: '2022-04-01T04:00:00Z', value: 13 },
      { date: '2022-05-01T04:00:00Z', value: 14 },
      { date: '2022-06-01T04:00:00Z', value: 12 },
      { date: '2022-07-01T04:00:00Z', value: 18 },
      { date: '2022-08-01T04:00:00Z', value: 13 },
      { date: '2022-09-01T04:00:00Z', value: 15 },
      { date: '2022-10-01T04:00:00Z', value: 16 },
      { date: '2022-11-01T04:00:00Z', value: 13 },
      { date: '2022-12-01T04:00:00Z', value: 15 }
    ],
    lotsBidded: [
      { date: '2022-01-01T04:00:00Z', value: 20 },
      { date: '2022-02-01T04:00:00Z', value: 22 },
      { date: '2022-03-01T04:00:00Z', value: 20 },
      { date: '2022-04-01T04:00:00Z', value: 23 },
      { date: '2022-05-01T04:00:00Z', value: 24 },
      { date: '2022-06-01T04:00:00Z', value: 29 },
      { date: '2022-07-01T04:00:00Z', value: 27 },
      { date: '2022-08-01T04:00:00Z', value: 23 },
      { date: '2022-09-01T04:00:00Z', value: 25 },
      { date: '2022-10-01T04:00:00Z', value: 26 },
      { date: '2022-11-01T04:00:00Z', value: 20 },
      { date: '2022-12-01T04:00:00Z', value: 25 }
    ],
    bids: [
      { date: '2022-01-01T04:00:00Z', value: 50 },
      { date: '2022-02-01T04:00:00Z', value: 51 },
      { date: '2022-03-01T04:00:00Z', value: 53 },
      { date: '2022-04-01T04:00:00Z', value: 50 },
      { date: '2022-05-01T04:00:00Z', value: 56 },
      { date: '2022-06-01T04:00:00Z', value: 53 },
      { date: '2022-07-01T04:00:00Z', value: 57 },
      { date: '2022-08-01T04:00:00Z', value: 53 },
      { date: '2022-09-01T04:00:00Z', value: 52 },
      { date: '2022-10-01T04:00:00Z', value: 53 },
      { date: '2022-11-01T04:00:00Z', value: 50 },
      { date: '2022-12-01T04:00:00Z', value: 55 }
    ]
  };

  const yy: CartMesure = {
    bids: [],
    lotsBidded: [],
    ordersWon: [
      {
        date: '2023-03-17T00:00:00Z',
        value: 10
      }
    ],
    ordersLost: [
      {
        date: '2023-03-30T00:00:00Z',
        value: 2
      }
    ]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
  // const resp = await axiosInstance.get(``);
  // return resp.data;
};

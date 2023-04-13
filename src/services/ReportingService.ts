import axios from 'axios';
import { ParameterKeys } from '../TraderDashboard/Parameters';

export const axiosInstance = axios.create({
  baseURL: 'https://strong-pig-76.deno.dev',
  params: { api_key: 'API_KEY' }
});

export const getReporting = async (): Promise<CartMesure> => {
  const data = {
    bids: [
      { date: '2022-01-01T04:00:00Z', value: 30 },
      { date: '2022-02-01T04:00:00Z', value: 20 },
      { date: '2022-03-01T04:00:00Z', value: 40 },
      { date: '2022-04-01T04:00:00Z', value: 53 },
      { date: '2022-05-01T04:00:00Z', value: 63 },
      { date: '2022-06-01T04:00:00Z', value: 53 },
      { date: '2022-07-01T04:00:00Z', value: 63 },
      { date: '2022-08-01T04:00:00Z', value: 43 },
      { date: '2022-09-01T04:00:00Z', value: 53 },
      { date: '2022-10-01T04:00:00Z', value: 63 },
      { date: '2022-11-01T04:00:00Z', value: 53 },
      { date: '2022-12-01T04:00:00Z', value: 55 }
    ],
    lotsBidded: [
      { date: '2022-01-01T04:00:00Z', value: 100 },
      { date: '2022-02-01T04:00:00Z', value: 20 },
      { date: '2022-03-01T04:00:00Z', value: 40 },
      { date: '2022-04-01T04:00:00Z', value: 53 },
      { date: '2022-05-01T04:00:00Z', value: 63 },
      { date: '2022-06-01T04:00:00Z', value: 53 },
      { date: '2022-07-01T04:00:00Z', value: 63 },
      { date: '2022-08-01T04:00:00Z', value: 43 },
      { date: '2022-09-01T04:00:00Z', value: 53 },
      { date: '2022-10-01T04:00:00Z', value: 63 },
      { date: '2022-11-01T04:00:00Z', value: 53 },
      { date: '2022-12-01T04:00:00Z', value: 55 }
    ],
    ordersWon: [
      { date: '2022-01-01T04:00:00Z', value: 0 },
      { date: '2022-02-01T04:00:00Z', value: 20 },
      { date: '2022-03-01T04:00:00Z', value: 40 },
      { date: '2022-04-01T04:00:00Z', value: 53 },
      { date: '2022-05-01T04:00:00Z', value: 63 },
      { date: '2022-06-01T04:00:00Z', value: 53 },
      { date: '2022-07-01T04:00:00Z', value: 63 },
      { date: '2022-08-01T04:00:00Z', value: 43 },
      { date: '2022-09-01T04:00:00Z', value: 53 },
      { date: '2022-10-01T04:00:00Z', value: 63 },
      { date: '2022-11-01T04:00:00Z', value: 53 },
      { date: '2022-12-01T04:00:00Z', value: 55 }
    ],
    ordersLost: [
      { date: '2022-01-01T04:00:00Z', value: 50 },
      { date: '2022-02-01T04:00:00Z', value: 33 },
      { date: '2022-03-01T04:00:00Z', value: 80 },
      { date: '2022-04-01T04:00:00Z', value: 58 },
      { date: '2022-05-01T04:00:00Z', value: 18 },
      { date: '2022-06-01T04:00:00Z', value: 28 },
      { date: '2022-07-01T04:00:00Z', value: 38 },
      { date: '2022-08-01T04:00:00Z', value: 88 },
      { date: '2022-09-01T04:00:00Z', value: 58 },
      { date: '2022-10-01T04:00:00Z', value: 68 },
      { date: '2022-11-01T04:00:00Z', value: 78 },
      { date: '2022-12-01T04:00:00Z', value: 28 }
    ]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  // const resp = await axiosInstance.get(``);
  // return resp.data;
};

export interface Mesure {
  date: string;
  value: number;
}

export interface CartMesure {
  [ParameterKeys.BIDS]: Mesure[];
  [ParameterKeys.LOT_BIDDED]: Mesure[];
  [ParameterKeys.ORDERS_WON]: Mesure[];
  [ParameterKeys.ORDERS_LOST]: Mesure[];
}

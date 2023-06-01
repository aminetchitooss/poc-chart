import axios from 'axios';
import { ParameterKeys } from '../TraderDashboard/Parameters';
import { format, addDays, parse, addMonths } from 'date-fns';

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

// last 30 days
export const getReporting_UC1 = async (): Promise<CartMesure> => {
  let startDate = new Date(2022, 9, 14);
  const min = 1;
  const max = 100;
  let ordersLost = [];
  let ordersWon = [];
  let lotsBidded = [];
  let bids = [];
  for (let x = 0; x < 30; x++) {
    var orderLostRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var orderWonRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var lostBiddedRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var bidRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    ordersLost.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderLostRandom
    });

    ordersWon.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderWonRandom
    });

    lotsBidded.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: lostBiddedRandom
    });

    bids.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: bidRandom
    });

    startDate = addDays(startDate, 1);
  }

  const data: CartMesure = {
    ordersLost: ordersLost,
    ordersWon: ordersWon,
    lotsBidded: lotsBidded,
    bids: bids
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

// on day
export const getReporting_UC2 = async (): Promise<CartMesure> => {
  const data: CartMesure = {
    ordersLost: [{ date: '2022-01-14', value: 5 }],
    ordersWon: [{ date: '2022-01-14', value: 12 }],
    lotsBidded: [{ date: '2022-01-14', value: 25 }],
    bids: [{ date: '2022-01-14', value: 55 }]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
  // const resp = await axiosInstance.get(``);
  // return resp.data;
};

// two days to less than one month
export const getReporting_UC3 = async (): Promise<CartMesure> => {
  let startDate = new Date(2022, 9, 4);
  const min = 1;
  const max = 100;
  let ordersLost = [];
  let ordersWon = [];
  let lotsBidded = [];
  let bids = [];
  for (let x = 0; x < 29; x++) {
    var orderLostRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var orderWonRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var lostBiddedRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var bidRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    ordersLost.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderLostRandom
    });

    ordersWon.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderWonRandom
    });

    lotsBidded.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: lostBiddedRandom
    });

    bids.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: bidRandom
    });

    startDate = addDays(startDate, 1);
  }

  console.log(ordersLost);
  const data: CartMesure = {
    ordersLost: ordersLost,
    ordersWon: ordersWon,
    lotsBidded: lotsBidded,
    bids: bids
  };
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
  // const resp = await axiosInstance.get(``);
  // return resp.data;
};

// one month to less than 7 months
export const getReporting_UC4 = async (): Promise<CartMesure> => {
  let startDate = new Date(2022, 9, 1);
  const min = 1;
  const max = 100;
  let ordersLost = [];
  let ordersWon = [];
  let lotsBidded = [];
  let bids = [];
  for (let x = 0; x < 189; x++) {
    var orderLostRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var orderWonRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var lostBiddedRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var bidRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    ordersLost.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderLostRandom
    });

    ordersWon.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderWonRandom
    });

    lotsBidded.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: lostBiddedRandom
    });

    bids.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: bidRandom
    });

    startDate = addDays(startDate, 1);
  }

  const data: CartMesure = {
    ordersLost: ordersLost,
    ordersWon: ordersWon,
    lotsBidded: lotsBidded,
    bids: bids
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
  // const resp = await axiosInstance.get(``);
  // return resp.data;
};

// one Full year
export const getReporting_UC5 = async (): Promise<CartMesure> => {
  let startDate = new Date(2022, 6, 1);
  const min = 1;
  const max = 100;
  let ordersLost = [];
  let ordersWon = [];
  let lotsBidded = [];
  let bids = [];
  for (let x = 0; x < 366; x++) {
    var orderLostRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var orderWonRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var lostBiddedRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    var bidRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    ordersLost.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderLostRandom
    });

    ordersWon.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: orderWonRandom
    });

    lotsBidded.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: lostBiddedRandom
    });

    bids.push({
      date: format(startDate, 'yyyy-MM-dd'),
      value: bidRandom
    });

    startDate = addDays(startDate, 1);
  }

  const data: CartMesure = {
    ordersLost: ordersLost,
    ordersWon: ordersWon,
    lotsBidded: lotsBidded,
    bids: bids
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const getXAxisFormatterData = (mesures: CartMesure): AxisFormatter => {
  const minDate = parse(mesures.bids[0].date, 'yyyy-MM-dd', new Date());
  const maxDate = parse(mesures.bids[mesures.bids.length - 1].date, 'yyyy-MM-dd', new Date());
  let minTickGap = 0;
  const dayDiffInDays = getDayDiffInDays(minDate, maxDate);
  let formatFunction = (currentDate: string, index: number) => {
    return 'dd MMMM';
  };
  if (dayDiffInDays == 0) {
    minTickGap = 30;
    formatFunction = (currentDate: string, index: number) => {
      return 'dd MMMM';
    };
  } else if (dayDiffInDays >= 2 && dayDiffInDays <= 30) {
    // days on top of months
    minTickGap = 30;
    formatFunction = (currentDate: string, index: number) => {
      return 'dd MMM';
    };
  } else if (addMonths(minDate, 1) < maxDate && addMonths(minDate, 7) > maxDate) {
    // show all months
    minTickGap = 70;
    formatFunction = (currentDate: string, index: number) => {
      return 'MMMM';
    };
  } else if (addMonths(minDate, 7) <= maxDate) {
    // show all months
    minTickGap = 50;
    formatFunction = (currentDate: string, index: number) => {
      const currentFormatedDate = new Date(currentDate);
      if (
        minDate.getMonth() == maxDate.getMonth() &&
        minDate.getFullYear() != maxDate.getFullYear() &&
        minDate.getMonth() == currentFormatedDate.getMonth()
      ) {
        return 'MMM yyyy';
      }
      return 'MMM';
    };
  }

  return {
    minDate: mesures.bids[0].date,
    maxDate: mesures.bids[mesures.bids.length - 1].date,
    minTickGap: minTickGap,
    formatFunction: formatFunction
  };
};

function getDayDiffInDays(startDate: Date, endDate: Date): number {
  const msInDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
}

interface AxisFormatter {
  minDate: string;
  maxDate: string;
  minTickGap: number;
  formatFunction: (currentDate: string, index: number) => string;
}

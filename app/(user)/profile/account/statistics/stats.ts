// EXAMPLE DATA FOR PROTOTYPE
export const PROTOTYPE_DATA = {
  weekly: {
    profileVisits: {
      newValue: 127,
      oldValue: 78,
    },
    newReaders: {
      newValue: 63,
      oldValue: 41,
    },
    returningReaders: {
      newValue: 72,
      oldValue: 48,
    },
    likes: {
      newValue: 31,
      oldValue: 19,
    },
    readingTime: {
      newValue: 42,
      oldValue: 28,
    },
    followers: {
      newValue: 512,
      oldValue: 378,
    },
  },
  biweekly: {
    profileVisits: {
      newValue: 289,
      oldValue: 187,
    },
    newReaders: {
      newValue: 142,
      oldValue: 89,
    },
    returningReaders: {
      newValue: 156,
      oldValue: 103,
    },
    likes: {
      newValue: 67,
      oldValue: 43,
    },
    readingTime: {
      newValue: 93,
      oldValue: 61,
    },
    followers: {
      newValue: 31,
      oldValue: 22,
    },
  },
  monthly: {
    profileVisits: {
      newValue: 623,
      oldValue: 412,
    },
    newReaders: {
      newValue: 312,
      oldValue: 198,
    },
    returningReaders: {
      newValue: 341,
      oldValue: 226,
    },
    likes: {
      newValue: 147,
      oldValue: 94,
    },
    readingTime: {
      newValue: 198,
      oldValue: 131,
    },
    followers: {
      newValue: 67,
      oldValue: 46,
    },
  },
};

interface Metric {
  profileVisits: number;
  newReaders: number;
  returningReaders: number;
  likes: number;
  readingTime: number; // dakika cinsinden
  followers: number;
}
interface ChangeRate {
  profileVisits: number;
  newReaders: number;
  returningReaders: number;
  likes: number;
  readingTime: number;
  followers: number;
}
type TimePeriod = "1week" | "2weeks" | "1month";

interface DailyData extends Metric {
  date: string; // ISO 8601
}

interface StatisticsData {
  timePeriod: TimePeriod;
  data: DailyData[];
  totals: Metric;
  changeRates: ChangeRate;
}

type GetStatistics = (timePeriod: TimePeriod) => Promise<StatisticsData>;

function calculateChangeRate(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
}

function createStatisticsData(
  timePeriod: TimePeriod,
  currentData: DailyData[],
  previousData: DailyData[]
): StatisticsData {
  const totals: Metric = currentData.reduce(
    (acc, day) => ({
      profileVisits: acc.profileVisits + day.profileVisits,
      newReaders: acc.newReaders + day.newReaders,
      returningReaders: acc.returningReaders + day.returningReaders,
      likes: acc.likes + day.likes,
      readingTime: acc.readingTime + day.readingTime,
      followers: acc.followers + day.followers,
    }),
    {
      profileVisits: 0,
      newReaders: 0,
      returningReaders: 0,
      likes: 0,
      readingTime: 0,
      followers: 0,
    }
  );

  const previousTotals: Metric = previousData.reduce(
    (acc, day) => ({
      profileVisits: acc.profileVisits + day.profileVisits,
      newReaders: acc.newReaders + day.newReaders,
      returningReaders: acc.returningReaders + day.returningReaders,
      likes: acc.likes + day.likes,
      readingTime: acc.readingTime + day.readingTime,
      followers: acc.followers + day.followers,
    }),
    {
      profileVisits: 0,
      newReaders: 0,
      returningReaders: 0,
      likes: 0,
      readingTime: 0,
      followers: 0,
    }
  );

  const changeRates: ChangeRate = {
    profileVisits: calculateChangeRate(
      totals.profileVisits,
      previousTotals.profileVisits
    ),
    newReaders: calculateChangeRate(
      totals.newReaders,
      previousTotals.newReaders
    ),
    returningReaders: calculateChangeRate(
      totals.returningReaders,
      previousTotals.returningReaders
    ),
    likes: calculateChangeRate(totals.likes, previousTotals.likes),
    readingTime: calculateChangeRate(
      totals.readingTime,
      previousTotals.readingTime
    ),
    followers: calculateChangeRate(totals.followers, previousTotals.followers),
  };

  return {
    timePeriod,
    data: currentData,
    totals,
    changeRates,
  };
}

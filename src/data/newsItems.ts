export type NewsItem = {
  title: string;
  date: string;
  image: string;
  summary?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "ZelosTech launches new city distribution network",
    date: "2026-01-18",
    image: "/Rectangle%2046.png",
    summary: "Singapore Post signs new multi-city deployment agreement."
  },
  {
    title: "Autonomous cold-chain pilot reaches 99.98% uptime",
    date: "2026-01-02",
    image: "/Rectangle%2046-1.png",
    summary: "Validated performance across high-temperature routes."
  },
  {
    title: "ZelosTech partners with global logistics leader",
    date: "2025-12-18",
    image: "/Rectangle%2047.png",
    summary: "Global rollout accelerates autonomous fleet coverage."
  },
  {
    title: "New safety report: 73M km autonomous drive record",
    date: "2025-11-28",
    image: "/Rectangle%2048.png",
    summary: "Safety benchmarks set for large-scale autonomous ops."
  }
];

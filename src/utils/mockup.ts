interface URIProps {
  title: string;
  link: string;
}

export const URIs: URIProps[] = [
  { title: "spot", link: "/spot" },
  { title: "perps", link: "/perps" },
  { title: "ape", link: "/ape" },
];

// Define the interface for expire items
interface ExpireItemProps {
  title: string;
  value: string;
}

// Define the array of expire items
export const expireItems: ExpireItemProps[] = [
  { title: '10 Minutes', value: '10' },
  { title: '30 Minutes', value: '30' },
  { title: '1 Hour', value: '60' },
  { title: '1 Day', value: '1440' },
  { title: '2 Days', value: '2880' },
  { title: '7 Days', value: '10080' },
];

// Define the interface for coin items
interface CoinItemProps {
  logo: string;
  title: string;
  value: string;
  description: string;
  amount: number;
}

// Define the array of coin items
export const coinItems: CoinItemProps[] = [
  { logo: 'slav', title: 'SLAV', value: '0', description: 'Slav', amount: 2500 },
  { logo: 'ecp', title: 'ECP', value: '1', description: 'USDT', amount: 0 },
  { logo: 'usdc', title: 'USDC', value: '2', description: 'USDC', amount: 0 },
  { logo: 'usdt', title: 'USDT', value: '3', description: 'Eclipse', amount: 0 },
  { logo: 'eth', title: 'ETH', value: '4', description: 'Ethereum', amount: 0 },
];

export interface SpotFormProps {
  title: string;
  description: string;
}

export const spotForms: SpotFormProps[] = [
  { title: 'Swap', description: '' },
  { title: 'Limit', description: '' },
  { title: 'DCA', description: 'Dollar-Cost Averaging' },
  { title: 'VA', description: 'Vaults & Yield Strategies' },
];

export const perpTabs: string[] = ["Perpetual Trading", "Earn"];
export const perpForms: string[] = ["SLAV", "ETH", "BSC"];
export const earnForms: string[] = ["Trade", "Buy", "Sell"];

export const additionForms: string[] = ["setting", "add"];

interface historyDataProps {
  time: string;
  type: string;
  quantity: number;
  value: number;
  price_usd: number;
  price_gtd: number;
}

interface swapDataProps extends historyDataProps {
  maker: string;
}
export const historyData:historyDataProps[] = [
  { time: '2021/07/14 03:46:36', type: 'Buy/M.', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501 },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501 },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 800, value: 250, price_usd: 300, price_gtd: 0.3492 },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 30, value: 5, price_usd: 301, price_gtd: 0.3462 },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3472 },
];

export const swapData:swapDataProps[] = [
  { time: '2021/07/14 03:46:36', type: 'Buy/M.', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 800, value: 250, price_usd: 300, price_gtd: 0.3492, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 30, value: 5, price_usd: 301, price_gtd: 0.3462, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3472, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy/M.', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 800, value: 250, price_usd: 300, price_gtd: 0.3492, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 30, value: 5, price_usd: 301, price_gtd: 0.3462, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3472, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy/M.', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3501, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 800, value: 250, price_usd: 300, price_gtd: 0.3492, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Sell', quantity: 30, value: 5, price_usd: 301, price_gtd: 0.3462, maker: "0xYUk...yu8" },
  { time: '2021/07/14 03:46:36', type: 'Buy', quantity: 2000, value: 400, price_usd: 300, price_gtd: 0.3472, maker: "0xYUk...yu8" },
];
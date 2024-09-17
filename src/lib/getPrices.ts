import axios from "axios";

// Define an interface for the token updates  
interface TokenUpdate {
    symbol: string;
    priceKey: string;
}

// Define an interface for the price response from the API  
interface PriceResponse {
    [key: string]: {
        usd: number;
    };
}

// Define the token updates array  
const tokenUpdates: TokenUpdate[] = [
    { symbol: "USDT", priceKey: "tether" },
    { symbol: "USDC", priceKey: "usd-coin" },
    { symbol: "WIF", priceKey: "dogwifcoin" },
    { symbol: "JUP", priceKey: "jupiter-exchange-solana" },
];

// Function to get token prices in SOL  
async function getTokenPriceInSOL(tokenIds: string[]): Promise<Record<string, number> | null> {
    try {
        const solPriceResponse = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
        const solPriceInUSD: number = solPriceResponse.data.solana.usd;

        const tokenPriceResponse = await axios.get<PriceResponse>(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenIds.join(",")}&vs_currencies=usd`);

        const tokenPricesInSOL: Record<string, number> = {};
        tokenIds.forEach((tokenId) => {
            const tokenPriceInUSD = tokenPriceResponse.data[tokenId].usd;
            tokenPricesInSOL[tokenId] = tokenPriceInUSD;
        });

        return tokenPricesInSOL;
    } catch (error) {
        console.error("Error fetching price:", error);
        return null;
    }
}

// Function to handle token prices  
async function handleTokenPrices(): Promise<void> {
    const tokens: string[] = [
        "tether",
        "usd-coin",
        "dogwifcoin",
        "jupiter-exchange-solana",
    ];
    const prices = await getTokenPriceInSOL(tokens);

    const updatePromises = tokenUpdates.map(({ symbol, priceKey }: TokenUpdate) => {
        const price = prices ? prices[priceKey] : undefined;
        if (price !== undefined) {
            // return TokenService.update({ price }, { where: { symbol } });
        } else {
            console.error(`Price for ${priceKey} is not available.`);
            return Promise.resolve(); // Resolve with no action if price is undefined  
        }
    });

    try {
        await Promise.all(updatePromises); // Wait for all updates to complete  
        console.log("All token prices updated successfully!");
    } catch (error) {
        console.error("An error occurred while updating token prices:", error);
    }
}

// Optionally, you could schedule this function to run every 10 minutes using a scheduler like node-cron.
// import cron from 'node-cron';
// cron.schedule('*/10 * * * *', handleTokenPrices);
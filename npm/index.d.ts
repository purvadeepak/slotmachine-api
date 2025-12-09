declare module '@apiverve/slotmachine' {
  export interface slotmachineOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface slotmachineResponse {
    status: string;
    error: string | null;
    data: SlotMachineSimulatorData;
    code?: number;
  }


  interface SlotMachineSimulatorData {
      totalSpins:       number;
      numReels:         number;
      betPerSpin:       number;
      spins:            Spin[];
      totalBet:         number;
      totalWinnings:    number;
      netProfit:        number;
      wins:             number;
      losses:           number;
      winPercentage:    number;
      availableSymbols: AvailableSymbol[];
  }
  
  interface AvailableSymbol {
      symbol:           string;
      name:             string;
      payoutMultiplier: number;
  }
  
  interface Spin {
      spinNumber: number;
      reels:      Reel[];
      bet:        number;
      payout:     number;
      winType:    string;
      isWin:      boolean;
  }
  
  interface Reel {
      symbol: string;
      name:   string;
  }

  export default class slotmachineWrapper {
    constructor(options: slotmachineOptions);

    execute(callback: (error: any, data: slotmachineResponse | null) => void): Promise<slotmachineResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: slotmachineResponse | null) => void): Promise<slotmachineResponse>;
    execute(query?: Record<string, any>): Promise<slotmachineResponse>;
  }
}

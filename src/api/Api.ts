export type Boundaries = {
  boundaries: {
    purchasePrice: {
      min: number;
      max: number;
    };
    objectYear: {
      min: number;
      max: number;
    };
  };
};

export type Calculation = {
  leaseCalculation: {
    balloonPayment: number;
    downPayment: number;
    handlingFee: number;
    monthlyPayment: number;
    tenor: number;
    totalCosts: number;
  };
};
export type Api = {
  getBoundaries(): Promise<Boundaries>;
  getCalculation(
    purchasePrice: number,
    brand: string,
    objectYear: number,
    type: string,
  ): Promise<Calculation>;
};

import { Api, Boundaries } from "./Api";

export type BoundariesResponse = {
  data: Boundaries;
};

const API_URL = "https://frontend-developer-assignment.vercel.app/api/graphql";

export const beequip: Api = {
  async getBoundaries(): Promise<Boundaries> {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            boundaries {
              purchasePrice {
                min
                max
              }
              objectYear {
                min
                max
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
  },

  async getCalculation(
    purchasePrice: number,
    brand: string,
    objectYear: number,
    type: string,
  ) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query LeaseCalculation {
            leaseCalculation(
                input: {
                    purchasePrice: ${purchasePrice}
                    object: { brand: "${brand}", type: "${type}", year: ${objectYear} }
                }
            ) {
                balloonPayment
                downPayment
                handlingFee
                monthlyPayment
                tenor
                totalCosts
            }
        }
      `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
  },
};

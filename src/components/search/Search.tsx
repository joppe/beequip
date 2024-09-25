import { useEffect, useState } from "react";
import { Api, Boundaries } from "../../api/Api";
import { Main } from "../core/main/Main";
import { useStore } from "../../store/useStore";
import { FormData } from "./FormData";
import { SearchForm } from "./SearchForm";

type SearchProps = {
  api: Api;
};

export function Search({ api }: SearchProps) {
  const store = useStore();
  const [boundaries, setBoundaries] = useState<Boundaries | null>(null);

  useEffect(() => {
    api.getBoundaries().then(setBoundaries);
  }, [api]);

  function onSubmit(data: FormData) {
    const { brand, type, objectYear, purchasePrice } = data;

    api
      .getCalculation(purchasePrice, brand, objectYear, type)
      .then((calculation) => {
        console.log(calculation);
        store.addResult({
          timestamp: Date.now(),
          params: {
            brand,
            type,
            objectYear,
            purchasePrice,
          },
          calculation: calculation.leaseCalculation,
        });
      });
  }

  return (
    <Main>
      {boundaries === null ? (
        <p>Loading...</p>
      ) : (
        <SearchForm boundaries={boundaries} onSubmit={onSubmit} />
      )}
    </Main>
  );
}

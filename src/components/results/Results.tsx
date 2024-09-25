import { Aside } from "../core/aside/Aside";
import classes from "./results.module.css";
import { useStore } from "../../store/useStore";
import { Result } from "./Result";

export function Results() {
  const results = useStore();

  return (
    <Aside>
      <h1 className={classes.title}>Bewaarde berekeningen</h1>

      {results.results.length === 0 ? (
        <p>Geen berekeningen bewaard</p>
      ) : (
        results.results.map((result, index) => {
          return (
            <div key={index}>
              {index > 0 && <hr />}
              <Result result={result} />
            </div>
          );
        })
      )}
    </Aside>
  );
}

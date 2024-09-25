import { formatMoney } from "../../format/money";
import { Result as ResultItem } from "../../store/Store";
import classes from "./result.module.css";

type ResultProps = {
  result: ResultItem;
};

export function Result({ result }: ResultProps) {
  return (
    <dl className={classes.dl}>
      <dt className={classes.dt}>
        <span className={classes.id}>
          {result.params.brand} {result.params.type}
        </span>
      </dt>
      <dd className={classes.dd}>
        <span className={classes.highlight}>
          {formatMoney(result.calculation.monthlyPayment)}
        </span>{" "}
        /mnd
      </dd>
      <dt className={classes.dt}>Aanbetaling</dt>
      <dd className={classes.dd}>
        {formatMoney(result.calculation.downPayment)}
      </dd>
      <dt className={classes.dt}>Slottermijn:</dt>
      <dd className={classes.dd}>
        {formatMoney(result.calculation.balloonPayment)}
      </dd>
      <dt className={classes.dt}>Looptijd</dt>
      <dd className={classes.dd}>{result.calculation.tenor} maanden</dd>
    </dl>
  );
}

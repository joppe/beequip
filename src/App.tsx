import { Main } from "./components/core/main/Main";
import { Search } from "./components/search/Search";
import { beequip } from "./api/beequip";
import classes from "./app.module.css";
import { Results } from "./components/results/Results";
import { StoreProvider } from "./store/Store";

function App() {
  return (
    <StoreProvider>
      <Main>
        <div className={classes.app}>
          <Search api={beequip} />
          <Results />
        </div>
      </Main>
    </StoreProvider>
  );
}

export default App;

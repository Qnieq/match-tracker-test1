import MatchTracker from "./components/features/match-tracker/MatchTracker";
import Header from "./components/shared/header/Header";

const App = () => {
  return (
    <div className="min-h-screen px-8 py-4">
      <Header />
      <MatchTracker />
    </div>
  );
};

export default App;

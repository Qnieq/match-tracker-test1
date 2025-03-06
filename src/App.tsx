import MatchTracker from "./components/features/match-tracker/MatchTracker";
import Header from "./components/shared/header/Header";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {

  const { width } = useWindowSize()

  const isMobile = width <= 545

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        padding: isMobile ? "22px" : "0 32px 0 32px",
        gap: isMobile ? "20px" : ""
      }}
    >
      <Header />
      <MatchTracker />
    </div>
  );
};

export default App;

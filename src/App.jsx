import "./App.css";
import { NavermapsProvider } from "react-naver-maps";
import MobileInvitation from "./components/MobileInvitation";

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <MobileInvitation />
    </NavermapsProvider>
  );
}

export default App;

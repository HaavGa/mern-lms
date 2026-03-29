import AuthPage from "@/pages/auth";
import {Route, Routes} from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
export default App;

import Navbar from "./components/Navbar";
import Allroutes from "./routes/Allroutes";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Allroutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;

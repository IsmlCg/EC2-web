import "./App.css";
import CountDown from "./Countdowns";
import FilteredList from "./Filtered";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Hello, World</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a React application styled with Tailwind CSS.
        </p>
        <CountDown />
      </header>
    </div>
  );
}

export default App;

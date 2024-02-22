import "./App.css";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContext.Provider value={{ addTodo }}>
      <div className="bg-[#1a283e] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;


import './App.css';
import FruitContainer from './components/FruitContainer'


function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'strawberry', 'raspberry', 'cherry', 'mango', 'lychee', 'longan', 'durian', 'jackfruit']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;

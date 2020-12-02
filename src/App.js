import Main from './Main/Main' 
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducerApp from './reducers/reducerApp'

const store = createStore(reducerApp);


function App() {
  return (
    <div className="App">
      <Provider store={store} ><Main /></Provider>
    </div>
  );
}

export default App;

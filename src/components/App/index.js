import '../../assets/styles/styles.css';
import TodoView from '../TodoView'
import Firebase, { FirebaseContext } from '../../firebase'

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <TodoView />
    </FirebaseContext.Provider>
  );
}

export default App;

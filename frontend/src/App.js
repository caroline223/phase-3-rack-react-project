
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Books from "../src/components/BooksComponents/Books"
import Authors from './components/AuthorsComponents/Authors';
import NewTaskForm from "./components/NewTaskForm"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/authors" component={Authors}></Route>
        <Route exact path="/tasks/new" component={NewTaskForm}></Route>
      </Switch>
    </Router>
  ) ;
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Contact from './components/Contact';
import ContactDetails from './components/ContactDetails';
import ContactList from './components/ContactList';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <ContactList />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/contactDetails'>
            <ContactDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

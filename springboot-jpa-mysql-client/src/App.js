import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="container">
          <Switch>
              <Route path="/"  exact component={ContactList}/>
              <Route path="/contacts" component={ContactList}/> 
              <Route path="/addContact" component={AddContact}/>
               <Route path="/updateContact/:id" component={UpdateContact}/> 
          </Switch>
        </div>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;

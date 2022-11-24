import './App.css';
//import signUp component
import SignUp from './components/signUp/SignUpForm';
//import react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <SignUp />
      {/* <Route exact path="/signup" element={<SignUp />} /> */}
    </>
  );
}

export default App;

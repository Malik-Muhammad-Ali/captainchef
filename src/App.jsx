import './App.css'

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Subscriptions from './pages/subscriptions/Subscriptions';
import Authentication from './pages/authentication/Authentication';
import CreateAccount from './pages/createAccount/CreateAccount';

// Components
import Navbar from './components/navbar/Navbar';
import PlanDetails from './pages/planDetails/PlanDetails';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/subscriptions' element={<Subscriptions />}>
            <Route path=':planId' element={<PlanDetails />} />
          </Route>
          <Route path='/authentication' element={<Authentication />} />
          <Route path='/createaccount' element={<CreateAccount />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
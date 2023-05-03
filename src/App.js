import './App.css';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Protected';
import Transactions from './pages/Dashboard/Transactions';
import People from './pages/Dashboard/People';
import TransferMoney from './pages/Dashboard/TransferMoney';

function App() {
  return (
    <div>
      <AuthContextProvider>

        <Routes>
          <Route path='/' element={<Landing />} />

          

          <Route path='/Dashboard' element={
            <Protected>
              <Dashboard />
            </Protected>} 
          />
          
          <Route path='/Transaction' element={
            <Protected>
              <Transactions />
            </Protected>} 
          />

          <Route path='/People' element={
            <Protected>
              <People />
            </Protected>} 
          />

          <Route path='/TransferMoney' element={
            <Protected>
              <TransferMoney />
            </Protected>} 
          />

    

        </Routes>

      </AuthContextProvider>
      
    </div>
  );
}

export default App;

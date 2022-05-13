
import './App.css';
import SignUp from './container/signup/signup';
import SignIn from './container/signin/signin';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/not-found';
import Dashboard from './container/dashboard/dashboard';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

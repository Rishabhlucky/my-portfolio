import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import HomePage from '../hompage/index';
import SignUp from '../SignUp/index';
import LogIn from '../LogIn';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs/indec';
import OurBlog from '../../components/OurBlog';
import CliensFeedback from '../../components/ClientsFeedback';
import OurWork from '../../components/OurWork';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ResetPassord from '../Resetpassword';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRouter from '../ProtectedRouter';




function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<ProtectedRouter> <HomePage/></ProtectedRouter> } ></Route>
        <Route path='/signup' element={<ProtectedRouter isLogin={true}><SignUp /></ProtectedRouter>}></Route>
        <Route path='/login' element={<ProtectedRouter isLogin={true}><LogIn /></ProtectedRouter>}></Route>
        <Route path='/aboutus' element={<ProtectedRouter><AboutUs /></ProtectedRouter>}></Route>
        <Route path='/contatus' element={<ProtectedRouter><ContactUs /></ProtectedRouter>}></Route>
        <Route path='/ourwork' element={<ProtectedRouter><OurWork /></ProtectedRouter>}></Route>
        <Route path='/ourblog' element={<ProtectedRouter><OurBlog /></ProtectedRouter>}></Route>
        <Route path='/clientfeedback' element={<ProtectedRouter><CliensFeedback /></ProtectedRouter>}></Route>
        <Route path='/resetpassword' element={<ResetPassord />}></Route>
        
      
       </Routes>
       <Footer />
      </Router>  
      <ToastContainer />
    </div>
  );
}

export default App;

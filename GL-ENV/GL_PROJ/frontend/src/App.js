import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import './App.css';
import {Activate, Home, UserHome, Login, ResetPassword, ResetPasswordConfirm, Signup, Google, Announces, Favorite, UserAnnounces, Announce, About} from './pages/index'
import store from './store';

import { Provider } from 'react-redux';
import Layout from './hocs/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/user-home" element={<UserHome/>} />
            <Route exact path="/announces" element={<Announces/>} />
            <Route exact path="/announce/:id" element={<Announce/>} />
            <Route exact path="/favorite" element={<Favorite/>} />
            <Route exact path="/user-announces" element={<UserAnnounces/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/google' element={<Google/>} />
            <Route exact path='/reset-password' element={<ResetPassword/>} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
            <Route exact path='/activate/:uid/:token' element={<Activate/>} />
          </Routes>
        </Layout>

      </Router>
    </Provider>
  );
}

export default App;
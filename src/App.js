import React, {Fragment} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

// import axios from 'axios';
import Githubstate from './context/github/GithubState'; 
import AlertState from './context/alert/AlertState'; 

import './App.css';

const App = () => {

  // async componentDidMount() {
  //   this.setState({loading:true});
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({users: res.data,loading:false});
  // }

  // const searchUsers = async text => {
  //   setLoading(true);

  //    const res = await axios.get(
  //      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

//  const getUserRepos = async (username) => {
//     setLoading(true);

//      const res = await axios.get(
//        `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
//        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
//     setRepos(res.data);
//     setLoading(false);
//   }

  // const showAlert = (msg,type) => {
  //   setAlert({
  //     msg,
  //     type
  //   })
  //   setTimeout(()=> setAlert(null),5000);
  // }

  return (
    <Githubstate>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title=" Github finder" icon="fab fa-github"/>
            <div className="container">
              <Alert 
              />
              <switch>
                <Route 
                //  exact 
                //   path="/" render={props => (
                //   <Fragment>
                //     <Search 
                //       // clearUsers={clearUsers} 
                //       // showClear={users.length > 0 ? true: false}
                //       // setAlert={showAlert}
                //     />
                //     <Users />
                //   </Fragment>
                // )} />
                  exact path ='/' component={Home}
                />
                <Route exact path="/about" component={About} />
                <Route  excat path="/user/:login" component={User} />
                {/* <Route component={NotFound} /> */}
                {/* <Route path="/404"  component={NotFound} />
                <Route to="/404" /> */}
              </switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </Githubstate>
  );
}
 
export default App;

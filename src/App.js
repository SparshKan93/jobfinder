import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import JobPosts from "./Components/JobPosts";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PostState from "./context/posts/PostState";

function App() {
  return (
    <>
    <PostState>
    <Router>
      <Navbar title="JobPosts" />
      <div>
      <Routes>
          {/* <Route path="/" element={<Layout />}/> */}
          <Route exact path="/" element={ <Home />}/>
          <Route exact path="/login" element={ <Login />}/>
          <Route exact path="/signup" element={ <SignUp />}/>
          <Route exact path="/jobposts" element={ <JobPosts />}/>
          {/* <Route path="*" element={ <Error/> }/> */}
          
       </Routes>
      </div>
      
      </Router>
    </PostState>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import React from 'react';
import './App.css';
import PostList from './Components/postList';
import GetList from './Components/getList';

function App() {
  return (
    <div className="App">
      <PostList />
      <GetList/>
    </div>
  );
}

export default App;

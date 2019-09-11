import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends React.Component{
    render() {
        return <FirstComponent displaytext="First Component Data" />
    }
};

export default App;

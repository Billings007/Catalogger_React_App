import React from 'react';
import './styles/App.css';
import Table from './table';

{/*class Main extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (

        );
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

        );
    }
}
*/}
class App extends React.Component {

    render() {
        return (
           <React.Fragment>
                <Table term = "Fall 2019"/>
                <Table term = "Winter 2019"/>
                <Table term = "Spring 2020"/>
            </React.Fragment>
        );
    }
}

export default App;

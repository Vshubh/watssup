import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import TripSummary from './components/tripSummary';
import * as actionCreator from "./store/actions/actions"
import { connect } from 'react-redux';
import TripDetails from "./components/tripDetails"

class App extends React.Component {
state={
  count:1
}

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;
    return (
      <div >
     
        <Navbar />
        
        <TripSummary data={data}  />
        <TripDetails data={data} />
        
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { data: { data = {} } = {} } = state
  return {
    data
  };
};

const mapDispachToProps = dispatch => {
  return {
    fetchData: () => dispatch(actionCreator.fetchData()),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);

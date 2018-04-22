import React from 'react';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      home: 'Home',
    };
  }
  render() {
    console.log('HI');
    return (
      <div className="content-container">{this.state.home}</div>
    );
  }
}
// const Home = () => (
//   <div>Home</div>
// );


import React from 'react';
// import { Link } from 'react-router-dom';
// import NavLink from '../NavLink';
import Header from '../Header';
import SideBar from '../SideBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <SideBar />
      </div>
    );
  }
}
        // <div className="w3-container w3-sidebar w3-bar-block w3-dark-grey" style={{width: "25%"}}>

        //   <Link className="w3-bar-item w3-button" to="/">Home</Link>
        //   <Link className="w3-bar-item w3-button" to="/about">About</Link>
        //   <Link className="w3-bar-item w3-button" to="/repos/react-route">Repos</Link>
        //   <Link className="w3-bar-item w3-button" to="/user">User</Link>
        //   <NavLink className="w3-bar-item w3-button" to="/contacts">Contacts</NavLink>
        // </div>
// const App = (props) => (
//   <div>
//     <h1>React Router Tutorial</h1>
//     <ul>
//       <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
//       <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
//       <li><Link to="/repos/react-router" activeStyle={{ color: 'red'}}>Repos</Link></li>
//       <li><Link to="/user" activeClassName="active">User</Link></li>
//       <li><NavLink to="/contacts">Contacts</NavLink></li>
//     </ul>
//     {props.children}
//   </div>
// );

// App.propTypes = {
//   children: React.PropTypes.object,
// };


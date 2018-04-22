import React from 'react';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match || {},
    };
    console.log('Repos', props);
  }
  render() {
    return (
      <div className="content-container">
        <h3>Repos</h3>
        <h5>{this.state.match.params.name}</h5>
      </div>
    );
  }
}

// const Repos = (props) => (
//   <div>
//     <h3>Repos</h3>
//     <h5>{props.match.params.name}</h5>
//   </div>
// );
Repos.defaultProps = {
  match: {},
}
Repos.propTypes = {
  // match: React.PropTypes.object,
};

// export default Repos;

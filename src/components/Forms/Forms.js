import React from 'react'

export default class Forms extends React.Component {

  componentDidMount() {
    if (document.getElementById(this.props.type + 'Scripts') === null) {
      var s = document.createElement('script');
      s.id = this.props.type + 'Scripts'; 
      s.type = 'text/javascript';
      s.src = './' + this.props.type + 'Form.js'; 
      document.getElementById(this.props.type + "Div").appendChild(s);
    }
  }

  render() {
    return (
      <div className="form-div" id={this.props.type + "Div"}>
      </div>
    );
  }
}

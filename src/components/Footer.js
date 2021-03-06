import React, { PropTypes } from 'react'
import moment from 'moment'

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      address: ''
    }
  }

  componentDidMount() {
    fetch('/api/info').then(response => {
      if (!response.ok) {
        return false;
      }

      response.json().then(json => {
        this.setState({
          user: json.user,
          address: json.address
        });
      });
    });
  }

  render () {
    return (
      <footer {...this.props} className="footer">
        ©&nbsp;{moment().format('YYYY')}
        &nbsp;-&nbsp;{this.state.user}
        &nbsp;-&nbsp;<a href="/">{this.state.address}</a>
        <br />
        Powered by <a target="_blank" href="http://www.expressjs.com.cn">Express</a>
      </footer>
    );
  }
}

export default Footer;

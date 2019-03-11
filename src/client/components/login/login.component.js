import React from 'react';
import PropTypes from 'prop-types';
import { reduxConnect } from '@hox';
import * as actions from './login.action';

import './style.scss';

export class Login extends React.PureComponent {
  componentDidMount() {
    const { page } = this.props;
    console.log('Page', page);
  }

  render() {
    const { page } = this.props;
    return (
      <div className="LOGIN">
        <p>Login Component {page}</p>
      </div>
    );
  }
}

Login.propTypes = {
  page: PropTypes.string
};

Login.defaultProps = {
  page: 'Page'
};

export default reduxConnect(Login, actions);

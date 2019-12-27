import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../assets/search.png';
import Payments from './Payments';
import '../style/css/navbar.css';

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <img src={Logo} alt="img" className="img-style" />
            <span className="logo-google">
              <a href="/auth/google">Login with Google</a>
            </span>
          </div>
        );
      default:
        return (
          <Menu>
            <Menu.Item>
              <Payments />
            </Menu.Item>
            <Menu.Item>
              Credits: <a style={{ margin: '0 5px' }}> {auth.credits}</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/api/logout">Log Out</a>
            </Menu.Item>
          </Menu>
        );
    }
  }
  render() {
    const { auth } = this.props;
    console.log('here a the properties.', this.props);
    return (
      <div>
        <Menu pointing>
          <Link to={auth ? '/surveys/new' : '/'}>
            <Menu.Item className="text-emaily" name="Emaily" />
          </Link>
          <Menu.Menu position="right">{this.renderContent()}</Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container navigation">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <Link to="/" className="app-name">BidiiBuild</Link>
              </div>
              <div className="col-3 view-group">
                <Link to="/" className="grid"><i className="fas fa-th"></i></Link>
                <Link to="/" className="more"><i className="fas fa-ellipsis-v"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="collapse-menu">
              <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link text-uppercase" href="/">Dashboard</a>
                </li>
                <li className="nav-item dropdown text-uppercase">
                  <a className="nav-link dropdown-toggle" href="/" id="inventoryDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Inventory
                  </a>
                  <div className="dropdown-menu" aria-labelledby="inventoryDropdown">
                    <a className="dropdown-item" href="/">Inventory1</a>
                    <a className="dropdown-item" href="/">Inventory2</a>
                  </div>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link" href="/">Purchase Orders</a>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link" href="/">Bills</a>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link" href="/">Receipts</a>
                </li>
                <li className="nav-item dropdown text-uppercase">
                  <a className="nav-link dropdown-toggle" href="/" id="stockControlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Stock Control
                  </a>
                  <div className="dropdown-menu" aria-labelledby="stockControlDropdown">
                    <a className="dropdown-item" href="/">Stock1</a>
                    <a className="dropdown-item" href="/">Stock2</a>
                  </div>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link" href="/">Reports</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
import React from 'react'
import ResponsiveMenu from '../reusable-views/responsive-menu'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <header>
          <ResponsiveMenu />
        </header>
      );
    }
}

export default Header
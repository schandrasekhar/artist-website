import React from 'react'
import {ResponsiveMenu} from 'cs-pure-react-comp'


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
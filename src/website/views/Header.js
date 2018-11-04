import React from 'react'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          openMenu: false,
          enableVerticalView: false
        };
        this.closeMenu = this.closeMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);

        this.onResize = this.onResize.bind(this);

        this.enableVerticalView = this.enableVerticalView.bind(this);
        this.disableVerticalView = this.disableVerticalView.bind(this);
    }

    onResize() {
      this.closeMenu();
    }


    componentDidMount() {
      const windowResizeEventName = ('onorientationchange' in window) ? 'orientationchange' : 'resize';
      window.addEventListener(windowResizeEventName, this.onResize);
    }

    componentWillUnMount() {
      const windowResizeEventName = ('onorientationchange' in window) ? 'orientationchange' : 'resize';
      window.removeEventListener(windowResizeEventName, this.onResize);
    }

    closeMenu() {
      const self = this;
      this.setState({'openMenu': false});
      window.setTimeout(function() {
        self.disableVerticalView();
      }, 500);
    }

    openMenu() {
      this.enableVerticalView();
      this.setState({
        'openMenu': true
      });
    }

    enableVerticalView() {
      this.setState({'enableVerticalView': true});
    }

    disableVerticalView() {
      this.setState({'enableVerticalView': false});
    }

    toggleMenu() {
      this.state.openMenu ? this.closeMenu() : this.openMenu();
    }

    render() {
      return (
        <div  className={"custom-wrapper pure-g " + (this.state.openMenu ? 'open' : '')} id="menu">
          <div className="pure-u-1 pure-u-md-1-3">
              <div className="pure-menu">
                  <a href="#" className="pure-menu-heading custom-brand">Padmasiri Artwork</a>
                  <a href="#" className={"custom-toggle " + (this.state.openMenu ? 'x' : '')} id="toggle" onClick={this.toggleMenu}>
                  <s className="bar"></s><s className="bar"></s></a>
              </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
              <div className={"pure-menu custom-can-transform " + (this.state.enableVerticalView ? '' : 'pure-menu-horizontal')}>
                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Gallery</a></li>
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                  </ul>
              </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
              <div className={"pure-menu custom-can-transform custom-menu-3 " + (this.state.enableVerticalView ? '' : 'pure-menu-horizontal')}>
                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">About Me</a></li>
                  </ul>
              </div>
          </div>
      </div>
      );
    }
}

export default Header
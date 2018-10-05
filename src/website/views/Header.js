import React from 'react'

const Header = () => (
  
)


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    bindOnResize() {
        var menu = document.getElementById('menu'),
          WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';
      
      function toggleHorizontal() {
          [].forEach.call(
              document.getElementById('menu').querySelectorAll('.custom-can-transform'),
              function(el){
                  el.classList.toggle('pure-menu-horizontal');
              }
          );
      };
      
      function toggleMenu() {
          // set timeout so that the panel has a chance to roll up
          // before the menu switches states
          if (menu.classList.contains('open')) {
              setTimeout(toggleHorizontal, 500);
          }
          else {
              toggleHorizontal();
          }
          menu.classList.toggle('open');
          document.getElementById('toggle').classList.toggle('x');
      };
      
      function closeMenu() {
          if (menu.classList.contains('open')) {
              toggleMenu();
          }
      }
      
      document.getElementById('toggle').addEventListener('click', function (e) {
          toggleMenu();
          e.preventDefault();
      });
      
      window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
      })(this, this.document);
    }

    render() {
        <div class="custom-wrapper pure-g" id="menu">
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu">
                  <a href="#" class="pure-menu-heading custom-brand">Brand</a>
                  <a href="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
              </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
                  </ul>
              </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Yahoo</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">W3C</a></li>
                  </ul>
              </div>
          </div>
      </div>
    }
}

export default Header
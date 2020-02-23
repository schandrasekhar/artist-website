import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <img src="https://www.eurekapuzzles.com/components/com_virtuemart/shop_image/product/37491.jpg" className="pure-img hero-image"/>
            <div className="hero-text">
                Explore Collection
            </div>
        </div>
        );
    }
};

export default Home
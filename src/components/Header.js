import React from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
    render(){
        return <h1 className="f1">Robo Friends</h1>
    }
}

export default Header;
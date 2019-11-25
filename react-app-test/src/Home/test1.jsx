import React from 'react';

class Test1 extends React.Component{
    render(){
    var dom =<h1>{this.props.id}</h1>
        return dom;
    }
}

export default Test1
import React from "react";
const axios = require('axios');
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            number: 123,
            users: ''
        }

    }

    componentDidMount() {

        axios.get('http://localhost:8080/apartment-members/33333333')
            .then((response)=> {
                // handle success
                console.log(response);
                this.setState({users:response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    whenClick = () => {
        // alert('onclicked!!!')
        this.setState({display: !this.state.display});

    };

    buildResponse = () => {
        if (this.state.users) {
            return this.state.users.map(data => {
                return <li style={{background:'yellow',color:'green'}}>{data}</li>
            });
        }
        return "";
    };

    render() {
        return (
            <div>
                <h1 style={{color: 'red'}}>Hello World12!</h1>
                <button onClick={this.whenClick}>testMe</button>
                {this.state.display && <h1>button clicked!</h1>}
                {this.buildResponse()}
            </div>
        );
    }
}

export default Test;
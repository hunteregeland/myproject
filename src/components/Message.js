import { Component } from "react"

// es6 class
class Message extends Component {
    render() {
        // return jsx code
        return <h1>Message: {this.props.messagecode}</h1>
    }
}

export default Message;
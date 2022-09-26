import { Component } from "react"

class ClassEvent extends Component {

    handleClick() {
        console.log("Class-based Event Handled.");
    }

    render()  {
        return (
            <div>
                <div>This is a class-based component.</div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ClassEvent;
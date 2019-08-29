import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
    state = {
        message: "Form is Incomplete!"
    };

    isFormValid = val => {
        if (val) {
            this.setState({ message: "Form is valid" });
        } else {
            this.setState({ message: "Form is invalid" });
        }
    };

    render() {
        return (
            <div>
                <Form isFormValid={this.isFormValid}></Form>
                <Message message={this.state.message}></Message>
            </div>
        );
    }
}

export default App;

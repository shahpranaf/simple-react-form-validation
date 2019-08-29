import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            data: {
                name: "",
                url: "",
                phone: "",
                email: ""
            }
        };
    }

    handleSubmit = () => {
        const { isNameValid, isEmailValid, isPhoneValid, isUrlValid, data } = this.state;
        if (isEmailValid && isNameValid && isPhoneValid && isUrlValid) {
            this.props.isFormValid(true);
        } else {
            this.props.isFormValid(false);
        }
        console.log(isNameValid, isEmailValid, isPhoneValid, isUrlValid);
    };

    handleChange = ({ target: input }) => {
        const name = input.name;
        const val = input.value;

        const { data } = this.state;
        data[name] = val;
        this.setState({ data });

        if (!val || (val && val.length <= 3)) {
            return;
        }

        if (name === "name") {
            if (name.trim() !== "" && new RegExp(/^[a-zA-Z]+$/gi).test(val)) {
                this.setState({ isNameValid: true });
            } else {
                this.setState({ isNameValid: false });
            }
        } else if (name === "email") {
            if (
                name.trim() !== "" &&
                new RegExp(
                    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                ).test(val)
            ) {
                this.setState({ isEmailValid: true });
            } else {
                this.setState({ isEmailValid: false });
            }
        } else if (name === "phone") {
            if (name.trim() !== "" && new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gi).test(val)) {
                this.setState({ isPhoneValid: true });
            } else {
                this.setState({ isPhoneValid: false });
            }
        } else if (name === "url") {
            if (
                name.trim() !== "" &&
                new RegExp(
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
                ).test(val)
            ) {
                this.setState({ isUrlValid: true });
            } else {
                this.setState({ isUrlValid: false });
            }
        }
    };

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h3>Name:</h3>
                    <input
                        type="text"
                        className="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}></input>
                    <h3>Email:</h3>
                    <input
                        type="text"
                        className="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}></input>
                    <h3>Phone:</h3>
                    <input
                        type="number"
                        className="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}></input>
                    <h3>Blog URL:</h3>
                    <input
                        type="text"
                        className="url"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleChange}></input>

                    <div className="small-6 small-centered text-center columns">
                        <a onClick={this.handleSubmit} href="#" className="button success expand round text-center">
                            Verify
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    isFormValid: PropTypes.func
};

export default Form;

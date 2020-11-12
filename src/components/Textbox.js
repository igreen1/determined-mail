import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textbox extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.defaultText ? { value: this.props.defaultText } : { value: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An email was sent:\n' + this.state.value);
        event.preventDefault();
    }

    render() {

        if (this.props.singleLine) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {this.props.title}
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </form>

                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {this.props.title}
                            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Send" />
                    </form>

                </div>
            )
        }
        // return this.props.singleLine == "true" ? (
        //     <div>
        //         <form onSubmit={this.handleSubmit}>
        //             <label>
        //                 {this.props.title}
        //                 <input type="text" value={this.state.value} onChange={this.handleChange} />
        //             </label>
        //         </form>

        //     </div>
        // )

        //     :

        //     (
        //         <div>
        //             <form onSubmit={this.handleSubmit}>
        //                 <label>
        //                     {this.props.title}
        //                     <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        //                 </label>
        //                 <input type="submit" value="Send" />
        //             </form>

        //         </div>
        //     )
    }

}

export default Textbox;
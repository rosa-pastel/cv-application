import React from "react";
export default class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Pam Halpert",
      address: "383 Linden Avenue, Scranton, PA",
      mail: "pambeesly@dundermifflin.com",
      phone: "(570) 555-0148",
    };
    this.updateName = this.updateName.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateMail = this.updateMail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
  }
  updateName(e) {
    this.setState({ fullName: e.target.value });
  }
  updateAddress(e) {
    this.setState({ address: e.target.value });
  }
  updateMail(e) {
    this.setState({ mail: e.target.value });
  }
  updatePhone(e) {
    this.setState({ phone: e.target.value });
  }
  render() {
    if (this.props.mode === "edit") {
      return (
        <div id="general" className="edit">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              defaultValue={this.state.fullName}
              onChange={(e) => this.updateName(e)}
            ></input>
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              defaultValue={this.state.address}
              onChange={(e) => this.updateAddress(e)}
            ></input>
          </label>
          <label htmlFor="mail">
            E-mail
            <input
              type="email"
              id="mail"
              defaultValue={this.state.mail}
              onChange={(e) => this.updateMail(e)}
            ></input>
          </label>
          <label htmlFor="phone">
            Phone Number
            <input
              type="tel"
              id="phone"
              defaultValue={this.state.phone}
              onChange={(e) => this.updatePhone(e)}
            ></input>
          </label>
        </div>
      );
    } else {
      return (
        <div id="general">
          <h1>{this.state.fullName}</h1>
          <p>{this.state.address}</p>
          <p>{this.state.mail}</p>
          <p>{this.state.phone}</p>
        </div>
      );
    }
  }
}

import React, { Component } from "react";
import "../App.css";

function Square(props) {
  return (
    <div>
      <h2> {props.komponen}</h2>
      <p> {props.nim} </p>
      <a href="mailto:{{props.email}}">{props.email}</a>
    </div>
  );
}

export default class CompAndProps extends Component {
  render() {
    const bgColor1 = {
      backgroundColor: this.props.bgColor1,
    };
    const bgColor2 = {
      backgroundColor: this.props.bgColor2,
    };
    const bgColor3 = {
      backgroundColor: this.props.bgColor3,
    };
    const bgColor4 = {
      backgroundColor: this.props.bgColor4,
    };
    return (
      <div className="wrapper">
        <div className="User-info" style={bgColor1}>
          <Square
            komponen="NABILA RIZQI MAHARDIKA"
            nim="21120120120011"
            email="itsnabilaonmail@gmail.com"
          />
        </div>
        <div className="User-info" style={bgColor2}>
          <Square
            komponen="FAIZAL TRI ARDHANI WIJAYA"
            nim="21120120140069"
            email="faizal.ardhani12@gmail.com"
          />
        </div>
        <div className="User-info" style={bgColor3}>
          <Square
            komponen="DEBORA OKTARIA LUBIS"
            nim="21120120120032"
            email="deboraoktarialubis@gmail.com"
          />
        </div>
        <div className="User-info" style={bgColor4}>
          <Square
            komponen="ARDHIKA AZHAR PRATAMA"
            nim="21120120140036"
            email="ardhikaa412@gmail.com"
          />
        </div>
      </div>
    );
  }
}

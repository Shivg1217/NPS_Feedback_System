import React, { Component } from "react";
import QrReader from "react-qr-reader";

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
  
//   const handleClick = () => {
//     window.open(document.getElementById("scanDiv"));
//   };

class QRScanner extends Component {
  state = {
    result: "",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
    if(this.state.result){
        var x = document.getElementById("myDIV");
        console.log(x);

    }
  };
  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
          <div id="myDIV">
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
        />
          </div>
        <p style={{ color: "#000", margin: "50px", textAlign: "center" }}>
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default QRScanner;

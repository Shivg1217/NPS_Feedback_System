import React from "react";
import "./InvoiceItems.css";
import { Link } from "react-router-dom";

const InvoiceItems = () => {
  return (
    <div className="boxItem">
      <div className="invoiceItems">
        <h2>Invoice NPS Feedback</h2>
        <Link to="/qrScanner" style={{ textDecoration: "none" }}>
          <p>1. Scan QR Code</p>
        </Link>
        <Link to="/centerpoint" style={{ textDecoration: "none" }}>
          <p>2. NPS Rating</p>
        </Link>
        <p>3. Followup questions about improvement/satisfaction</p>
        <p>4. Submit</p>
      </div>
    </div>
  );
};

export default InvoiceItems;

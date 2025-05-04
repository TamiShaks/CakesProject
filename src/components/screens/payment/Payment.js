import React, { useState } from "react";
import './Payment.css'; // ודא שקובץ ה-CSS קיים ומעוצב
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Payment() {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false); // מצב עיבוד
  const [activeField, setActiveField] = useState(""); // השדה הפעיל כרגע

  // פונקציה לעדכון ה-state כאשר המשתמש מזין פרטים
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // פונקציה לטיפול במיקוד (focus) על שדה
  const handleFocus = (id) => {
    setActiveField(id); // עדכון השדה הפעיל
  };

  // פונקציה לטיפול באיבוד מיקוד (blur) על שדה
  const handleBlur = () => {
    setActiveField(""); // איפוס השדה הפעיל
  };

  // פונקציה לטיפול בלחיצה על כפתור "Pay Now"
  const handleSubmit = () => {
    setIsProcessing(true); // התחלת מצב עיבוד
    setTimeout(() => {
      setIsProcessing(false); // סיום מצב עיבוד
      const { cardholderName, cardNumber, expirationDate, cvv } = formData;
      alert(`
        Receipt:
        Cardholder Name: ${cardholderName}
        Card Number: ${cardNumber}
        Expiration Date: ${expirationDate}
        CVV: ${cvv}
      `);
    }, 3000); // השהייה של 3 שניות
  };

  return (
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center py-5">
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <h3 className="text-center mb-4">Payment Details</h3>
              <form autoComplete="off">
                <div className="input-container">
                  <MDBInput
                    label="Cardholder Name"
                    id="cardholderName"
                    type="text"
                    placeholder="John Doe"
                    className="mb-3"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("cardholderName")}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {activeField === "cardholderName" && (
                    <div className="floating-message">Enter the cardholder's name</div>
                  )}
                </div>
                <div className="input-container">
                  <MDBInput
                    label="Card Number"
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="mb-3"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("cardNumber")}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {activeField === "cardNumber" && (
                    <div className="floating-message">Enter the card number</div>
                  )}
                </div>
                <MDBRow>
                  <MDBCol size="6">
                    <div className="input-container">
                      <MDBInput
                        label="Expiration Date"
                        id="expirationDate"
                        type="text"
                        placeholder="MM/YY"
                        className="mb-3"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("expirationDate")}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                      {activeField === "expirationDate" && (
                        <div className="floating-message">Enter the expiration date</div>
                      )}
                    </div>
                  </MDBCol>
                  <MDBCol size="6">
                    <div className="input-container">
                      <MDBInput
                        label="CVV"
                        id="cvv"
                        type="text"
                        placeholder="123"
                        className="mb-3"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("cvv")}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                      {activeField === "cvv" && (
                        <div className="floating-message">Enter the CVV code</div>
                      )}
                    </div>
                  </MDBCol>
                </MDBRow>
                <button
                  onClick={handleSubmit}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    backgroundColor: isProcessing ? "#6c757d" : "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: isProcessing ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease-in-out",
                    whiteSpace: "nowrap",
                  }}
                  disabled={isProcessing}
                  onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
                  onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                >
                  {isProcessing ? "Processing..." : "Pay Now"}
                </button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
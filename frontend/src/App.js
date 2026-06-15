import React, { useState, useEffect } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("Connecting to UniRush API...");
  const [connectionStatus, setConnectionStatus] = useState("loading");

  useEffect(() => {
    // Attempting to connect to the local backend server
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setApiMessage(data.message);
        setConnectionStatus("success");
      })
      .catch((error) => {
        setApiMessage("System Connection Refused: Verify server status.");
        setConnectionStatus("failed");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "#1a365d",
          padding: "25px",
          color: "white",
          borderRadius: "6px",
        }}
      >
        <h1>UniRush </h1>
        <p>Quick. Safe. Convenient</p>
      </header>

      <main
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #e2e8f0",
          borderRadius: "6px",
        }}
      >
        <h3>Full-Stack Pipeline Status Verification</h3>

        {/* Status indicator dynamically styled based on connection success or failure */}
        <div
          style={{
            display: "inline-block",
            padding: "12px 24px",
            fontWeight: "bold",
            borderRadius: "4px",
            backgroundColor:
              connectionStatus === "success" ? "#c6f6d5" : "#fed7d7",
            color: connectionStatus === "success" ? "#22543d" : "#742a2a",
          }}
        >
          {apiMessage}
        </div>
      </main>
    </div>
  );
}

export default App;

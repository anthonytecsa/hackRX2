import React, { useEffect, useState } from "react";
import { fetchTickets, addReply } from "../utils/firestore";

const PharmacistAlerts = () => {
  const [tickets, setTickets] = useState([]);
  const [expandedTicket, setExpandedTicket] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const loadTickets = async () => {
      const fetchedTickets = await fetchTickets();
      setTickets(fetchedTickets);
    };
    loadTickets();
  }, []);

  const handleReplySubmit = async (ticketId) => {
    if (!reply.trim()) return;
    await addReply(ticketId, { text: reply, timestamp: new Date() });
    setReply("");
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, replies: [...ticket.replies, { text: reply }] }
          : ticket
      )
    );
  };

  return (
    
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome, Pharmacist!</h1>
      <p>Manage prescriptions, patient data, and tickets here.</p>

      <div style={{ marginTop: "20px" }}>
        {tickets.map((ticket) => (
          <div key={ticket.id} style={{ marginBottom: "20px" }}>
            <button
              style={{
                width: "100%",
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() =>
                setExpandedTicket(
                  expandedTicket === ticket.id ? null : ticket.id
                )
              }
            >
              <strong>Patient: </strong> {ticket.patientName}
            </button>
            {expandedTicket === ticket.id && (
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <p>
                  <strong>Message: </strong> {ticket.message}
                </p>
                <div style={{ marginTop: "10px" }}>
                  <h4>Replies:</h4>
                  {ticket.replies && ticket.replies.length > 0 ? (
                    ticket.replies.map((reply, index) => (
                      <p key={index}>
                        <strong>Pharmacist: </strong> {reply.text}
                      </p>
                    ))
                  ) : (
                    <p>No replies yet.</p>
                  )}
                </div>
                <div style={{ marginTop: "10px" }}>
                  <textarea
                    placeholder="Type your reply here..."
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <button
                    onClick={() => handleReplySubmit(ticket.id)}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacistAlerts;

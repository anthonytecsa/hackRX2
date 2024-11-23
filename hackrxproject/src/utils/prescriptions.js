
const mockPrescriptionDatabase = {
    "Amoxicillin 500mg": {
      name: "Amoxicillin",
      sideEffects: ["Nausea", "Diarrhea", "Rash"],
      dosage: "500mg",
      instructions: "Take 1 capsule every 8 hours for 7 days.",
      timing: "Morning, Afternoon, Evening",
    },
  };
  
  export const lookupPrescription = (text) => {
    // Match the text with the database (basic example)
    const prescription = Object.keys(mockPrescriptionDatabase).find((key) =>
      text.includes(key)
    );
    return prescription ? mockPrescriptionDatabase[prescription] : null;
  };
  
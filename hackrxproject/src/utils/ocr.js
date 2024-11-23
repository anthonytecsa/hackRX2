import Tesseract from "tesseract.js";

export const extractTextFromImage = async (imageSrc) => {
  try {
    const result = await Tesseract.recognize(imageSrc, "eng");
    return result.data.text;
  } catch (error) {
    console.error("Error extracting text:", error);
    throw error;
  }
};

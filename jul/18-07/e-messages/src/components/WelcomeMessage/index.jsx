import React from "react";
import { useContext } from "react";

import { LanguageContext } from "../../contexts/LanguageContext";
const translations = {
  german: "Hallöchen",
  english: "Hiya",
  croatian: "Bokich",
  arabic: "مرعبا",
};
export default function WelcomeMessage() {
  const { language } = useContext(LanguageContext);
  return <div>{translations[language]}</div>;
}

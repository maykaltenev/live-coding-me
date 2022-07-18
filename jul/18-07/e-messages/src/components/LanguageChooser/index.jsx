import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function LanguageChooser() {
  const { language, setLanguage } = useContext(LanguageContext);

  console.log("The language from the context", language);
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="german">German</option>
      <option value="english">English</option>
      <option value="croatian">Croatian</option>
      <option value="arabic">Arabic</option>
    </select>
  );
}

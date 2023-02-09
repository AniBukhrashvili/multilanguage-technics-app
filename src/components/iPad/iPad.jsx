import React, { useContext } from "react";
import Box from "@mui/material/Box";

import { LanguageContext } from "../../LanguageContext";

import { translations } from "../../translations";

const Ipad = () => {
  const { language } = useContext(LanguageContext);
  const pageStrings = translations[language].page;
  return (
    <>
      <Box sx={{ marginTop: "100px", padding: "20px" }}>{pageStrings.ipad}</Box>
    </>
  );
};

export default Ipad;

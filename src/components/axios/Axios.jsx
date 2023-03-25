import React, { useState, useEffect } from "react";
import axios from "axios";
import { Translation, useTranslation } from "react-i18next";

import "./axios.css";

const Axios = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <button id="engBtn" onClick={() => handleChangeLanguage("eng")}>
        Eng
      </button>
      <button id="ruBtn" onClick={() => handleChangeLanguage("ru")}>
        Ru
      </button>
      <button id="uzbBtn" onClick={() => handleChangeLanguage("uzb")}>
        Uzb
      </button>
      <h1>{t("heading")}</h1>
      {data.map((element) => {
        return (
          <>
            <p key={element.name.population} id="name">
              {t("name")}
              {element.name.common}
            </p>
            <img src={element.flags.png} alt={element.altSpellings} />
            <p key={element.name.population}>
              {t("currency")}
              {element.currencies &&
                Object.keys(element.currencies)
                  .map((key) => {
                    return element.currencies[key].name;
                  })
                  .join(", ")}
            </p>
            <p key={element.name.population} id="languages">
              {t("language")}
              {element.languages &&
                Object.keys(element.languages).map((key) => {
                  return element.languages[key];
                })}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Axios;

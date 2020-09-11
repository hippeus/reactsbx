import React, { useState, useEffect } from "react";
import axios from "axios";

const google = "https://translation.googleapis.com/language/translate/v2";
const pubKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

interface ConvertProps {
  language: {
    label: string;
    value: string;
  };
  text: string;
}

const Convert = ({ language, text }: ConvertProps): JSX.Element => {
  const [translated, setTranslated] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        google,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: pubKey,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;

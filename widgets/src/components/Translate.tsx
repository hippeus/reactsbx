import React, { useState } from "react";
import Dropdown, { DropdownItem } from "./Dropdown";
import Convert from "./Convert";

interface Langauge {
  label: string;
  value: string;
}

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = (): JSX.Element => {
  const [language, setLanguage] = useState<DropdownItem>(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        options={options}
        current={language}
        onCurrentChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

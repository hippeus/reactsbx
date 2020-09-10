import React, { useState } from "react";
import Dropdown, { DropdownItem } from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import WikiSearch from "./components/WikiSearch";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you React?",
//     content: "You use React by creating components",
//   },
// ];

const dropdownOptions = [
  { label: "The color RED", value: "red" },
  { label: "The color BLUE", value: "blue" },
  { label: "The color YELLOW", value: "yellow" },
];

const App = () => {
  // selected governs the dropdown currently selected value
  const [selected, setSelected] = useState<DropdownItem>(dropdownOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          current={selected}
          onCurrentChange={setSelected}
          options={dropdownOptions}
        />
      ) : null}
      {/* <Accordion items={items} /> */}
      {/* <WikiSearch /> */}
    </div>
  );
};

export default App;

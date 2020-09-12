import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import WikiSearch from "./components/WikiSearch";
import Dropdown, { DropdownItem } from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you React?",
    content: "You use React by creating components",
  },
];

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
      <Header />
      {/* outter components in JSX gets an extra prop called children with info about the downstream components*/}
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <WikiSearch />
      </Route>
      <Route path='/dropdown'>
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
        </div>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      {/* {showDropdownPage()} */}
    </div>
  );
};

export default App;

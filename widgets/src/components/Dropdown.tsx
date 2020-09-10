import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  current: { label: string; value: string };
  onCurrentChange: React.Dispatch<React.SetStateAction<DropdownItem>>;
  options: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  value: string;
}

const Dropdown = ({
  options,
  current,
  onCurrentChange,
}: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  // dropDownRef use React reference to reach specific DOM element
  const dropDownRef = useRef<HTMLDivElement>(null);

  // This effect collapse dropdown if there is a mouse click event outside
  // the dropdown functional component boundaries. This is achieved by
  // explicitly setting an event on top level DOM document body and a direct
  // comparison of event target with dropDownRef reference.
  useEffect(() => {
    // BUG(@hippeus): what is a correct type for e here?!
    const onBodyClick = (e: any) => {
      if (dropDownRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((opt, index): JSX.Element | null => {
    if (opt.value === current.value) {
      return null;
    }
    return (
      <div
        key={index}
        className='item'
        onClick={() => {
          onCurrentChange(opt);
        }}
      >
        {opt.label}
      </div>
    );
  });

  return (
    <div ref={dropDownRef} className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{current.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

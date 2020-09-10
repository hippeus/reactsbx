import React, { useState } from "react";

interface AccordionProps {
  items?: Array<{
    title: string;
    content: string;
  }>;
}

// Using props deconstruction to reference single prop
const Accordion = ({ items }: AccordionProps): JSX.Element => {
  if (items === null) {
    throw new Error("app does not support empty items");
  }

  // syntax sugar called array deconstructing (likewise to object deconstruction)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onTitleClicked = (index: number): void => {
    setActiveIndex(index);
    console.log("clicked for index", index);
  };

  const renderedItems = items?.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      // React.Fragment is a meta info for React that this is a single
      // element (this is done to bypass accordion's css rule of not having
      // extra `<div>` between)
      <React.Fragment key={index}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;

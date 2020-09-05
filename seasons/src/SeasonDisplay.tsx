import "./SeasonDisplay.css";
import React from "react";

// `keyof any` is short for "string | number | symbol"
// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
//
// This helper func is useful if you want to index objects in TypeScript.
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat: number, month: number): string => {
  // northern hemisphere hot months: Apr - Sept [3,9)
  // southern hemisphere hot months:  Oct - Mar [0, 3) or [9,12)
  if (month > 2 && month < 9) {
    return lat >= 0 ? "summer" : "winter";
  } else {
    return lat >= 0 ? "winter" : "summer";
  }
};

interface SeasonProps {
  lat: number;
}

const SeasonDisplay = (props: SeasonProps): JSX.Element => {
  const currentSeason: string = getSeason(props.lat, new Date().getMonth());

  if (hasKey(seasonConfig, currentSeason)) {
    const { text, iconName } = seasonConfig[currentSeason];
    return (
      <div className={`season-display ${currentSeason}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
  return <div>Ooops, something went wrong!</div>;
};

export default SeasonDisplay;

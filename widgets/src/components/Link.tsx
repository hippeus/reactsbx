import React from "react";

// Link is an naive custom implementation for dispatching different routes
// within Router component (not React impl!)
const Link = ({ className, href, children }: any): JSX.Element => {
  // BUG(@hippeus): how to enforce strict type in this case, what is a proper type?
  const onClick = (e: { [k: string]: any }) => {
    if (e.metaKey || e.ctrKey) {
      // metaKey == command key on macos keyboard
      // ctrKey == ctrl on windowss
      return;
    }
    e.preventDefault();
    // browser built-in for changing current object state
    window.history.pushState({}, "", href as string);

    const navEvent = new PopStateEvent("popMineState");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

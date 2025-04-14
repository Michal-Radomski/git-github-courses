import React from "react";
import { string } from "prop-types";

import "./HelpBox.scss";

function HelpBox({ title, text }: { title: string; text: string }): React.JSX.Element {
  return (
    <React.Fragment>
      <article className="help-box">
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </React.Fragment>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;

import React from "react";
import SimpleLocalize from "../hoc/SimpleLocalize";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../hoc/LinkTranslated";

function AboutPage(props) {
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="about-us"
          defaultMessage="About us"
        />
      </h1>

      <LinkTranslated
        className="btn btn-link"
        href="/"
      >
        <FormattedMessage
          id="homepage"
          defaultMessage="Homepage"
        />
      </LinkTranslated>
    </SimpleLocalize>
  );
}
export default AboutPage;
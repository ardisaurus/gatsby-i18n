import React from "react";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../hoc/LinkTranslated";
import SimpleLocalize from "../hoc/SimpleLocalize";

function IndexPage(props) {
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="hello-world"
          defaultMessage="Hello World!"
        />
      </h1>

      <p>
        <FormattedMessage
          id="welcome-on-our-website"
          defaultMessage="Welcome on our multi-language website"
        />
      </p>

      <LinkTranslated
        className="btn btn-link"
        href="/about"
      >
        <FormattedMessage
          id="learn-more-about-us"
          defaultMessage="Learn more about us"
        />
      </LinkTranslated>
      <ul>
        <li><a href="/">English (Default)</a></li>
        <li><a href="https://ubiquitous-queijadas-a266e4.netlify.app/es/">Spanish</a></li>
      </ul>
      <p>Version : 2.0.0</p>
    </SimpleLocalize>
  );
}
export default IndexPage

import React from "react";
import {IntlProvider} from "react-intl";
import { navigate } from 'gatsby';

function SimpleLocalize(props) {

  const messages = props.pageContext.messages;
  const language = props.pageContext.language;

  console.log(props.location.host);

  if (props.location.host==="ubiquitous-queijadas-a266e4.netlify.app"+props.location.pathname==="/") {
    navigate('https://ubiquitous-queijadas-a266e4.netlify.app/es/');
  }

  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      {props.children}
    </IntlProvider>
  );
}

export default SimpleLocalize;
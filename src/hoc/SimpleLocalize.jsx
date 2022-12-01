import React from "react";
import {IntlProvider} from "react-intl";
import { navigate } from 'gatsby';

function SimpleLocalize(props) {

  const messages = props.pageContext.messages;
  const language = props.pageContext.language;

  console.log(props.location.pathname);

  // if (window.location.pathname === '/about/') {
  //   navigate('/products');
  // }

  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      {props.children}
    </IntlProvider>
  );
}

export default SimpleLocalize;
import React from "react";
import {Location} from '@reach/router';
import {getCurrentPageLanguage, getTranslatedPath} from "../utils/linkUtils";
import { Link } from "gatsby";

const LinkTranslated = ({children = [], className = "", href = "/"}) => {
  return (
    <Location>
      {locationProps => {
        const {pathname = ""} = locationProps.location;
        return <Link className={className}
                  to={getTranslatedPath(pathname, href)}
                  hrefLang={getCurrentPageLanguage(pathname)}
        >
          {children}
        </Link>;
      }}
    </Location>
  );
};

export default LinkTranslated;
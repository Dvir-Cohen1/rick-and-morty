import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.pathname} to={match.pathname}>
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
}

export default Breadcrumbs;

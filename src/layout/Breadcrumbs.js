import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  const isIndexPage = (useLocation().pathname === '/' ) ? true : false
  return (
    isIndexPage ||
    <section className="mt-5 max-w-screen-xl md:flex md:px-8">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.pathname} to={match.pathname}>
          {breadcrumb} /
        </Link>
      ))}
    </section>
  );
}

export default Breadcrumbs;

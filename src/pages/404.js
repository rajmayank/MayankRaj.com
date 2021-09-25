import * as React from "react";
import {Link} from "gatsby";

// styles
import "../styles/404.scss";

// markup
const NotFoundPage = () => {
  return (

    <main>
      <section id="page-404">
        <div className='img'></div>
        <div className='text'>
          <h1>Have you tried refreshing the page again?</h1>
          <p>Go <Link to="/">Home</Link></p>
        </div>
      </section>
    </main>

    // <ChromeDinoGame />

  );
};

export default NotFoundPage;

import React from 'react';
import Nav from '../navbar';
import { Helmet as Head } from 'react-helmet';

const Suggestions = () => (
  <>
    <Nav act={4} />
    <Head>
      <title>rayyansaidi.com</title>
      <html lang="en" />
    </Head>

    <h1>Got any project suggestions?</h1>
    <h3>
      Let me know at{' '}
      <a href="https://github.com/Ryyn-Sd/rayyansaidi.com/issues/new/choose">
        this link!
      </a>
    </h3>
  </>
);

export default Suggestions;

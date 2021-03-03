import React from 'react';
import Nav from '../navbar';
import { Helmet as Head } from 'react-helmet';

const Projects = () => (
  <>
    <Nav act={3} />
    <Head>
      <title>rayyansaidi.com</title>
      <html lang="en" />
    </Head>
    <h1>
      <a href="http://saidigroup.pitt.edu/">Saidi Research Group</a>
    </h1>
    <hr />
    <h2>What is this?</h2>
    <p>
      <a href="http://saidigroup.pitt.edu/">Saidi Research Group</a> is a
      website that shows the work that my dad has done. It was coded by his
      brother, however my dad doesn't like the design, so I am helping him
      re-code it.
    </p>
    <br />
    <h2>Can I learn more about your dad?</h2>
    <p>Sure! Find out more in the Bio section.</p>
    <br />
    <h2>What's the link?</h2>
    <p>
      <a href="http://saidigroup.pitt.edu/">Saidi Research Group</a>
    </p>
    <hr />
    <h1>
      <a href="https://salamsaidi.com">Salamsaidi.com</a>
    </h1>
    <hr />
    <h2>
      What is <a href="https://salamsaidi.com">Salamsaidi.com</a>?
    </h2>
    <p>
      Salam Saidi is my sister.{' '}
      <a href="https://salamsaidi.com">Salamsaidi.com</a> is her website. The
      problem is that it is too slow, so I am helping her re-code it.
    </p>
    <br />
    <h2>Can you tell me more about Salam?</h2>
    <p>
      If you look in the bio section (in the navbar) you can find some
      information about her!
    </p>
    <br />
    <h2>Why do you want to help her re-code it?</h2>
    <p>
      Well, I figure that since she is my sister, I might as well help her out
      on this. That is why it is in the projects section in the navbar.
    </p>
    <br />
    <h2>Where is her website?</h2>
    <p>
      <a href="https://salamsaidi.com">Salamsaidi.com</a>
    </p>
    <hr />
    <h1>
      <a href="https://angunapuh.github.io/">Angunapah's website</a>
    </h1>
    <hr />
    <h2>Who is Angunapah?</h2>
    <p>
      He is a person on GitHub which is a software to make things open source.
      GitHub has many projects on it such as WordPress which is a software to
      make websites, Swift which is the language used to code apps on iPadOS and
      iOS, and even rayyansaidi.com (and you probally already know what that is
      because you are looking at it right now)!
    </p>
    <br />
    <h2>Well what has he created?</h2>
    <p>
      <a href="https://github.com/angunapuh">angunapuh</a> is a person who is mostly working on his website. He is still learning how to code.
    </p>
    <br />
    <h2>Were can the website be found?</h2>
    <p>
      <a href="https://angunapuh.github.io/">Right here!</a> which already has
      some work done on it :)
    </p>
    <hr />
    <h1>Discord Bots</h1>
    <hr />
    <h2>What is Discord?</h2>
    <p><a href="https://discord.com/">Discord</a> is a way to comunicate with others with amazing calling, great chatting, and many other benifets. Not only that, you can code a bot with them.</p>
  </>
);

export default Projects;

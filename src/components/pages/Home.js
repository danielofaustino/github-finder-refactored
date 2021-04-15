import React, { Fragment } from 'react';

// Components
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;

import React from 'react';
import { Components, registerComponent, replaceComponent, useCurrentUser } from 'meteor/vulcan:core';
import Helmet from 'react-helmet';
import { Head, Utils } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MainLayout = ({ children, loading}) => {
  const { currentUser } = useCurrentUser();
  return (
  <React.Fragment>
    <Helmet>
      <link rel="icon" type="image/png" sizes="16x16 32x32" href="/favicon.ico" />
    </Helmet>
    {/*currentUser*/ true ? (
      <div>
      { children }
      </div>    
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
  )
};

registerComponent({ name: 'MainLayout', component: MainLayout });
replaceComponent('Layout', MainLayout);

Head.link.push({
  name: 'favicon',
  rel: 'icon', 
  type: 'image/png',
  href: `${Utils.getSiteUrl()}favicon.ico`
});
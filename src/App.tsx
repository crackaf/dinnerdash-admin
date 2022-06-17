import React from 'react';
import { fetchUtils, Admin, Resource, ShowGuesser, CustomRoutes, Options } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { SERVER_URL } from 'apis';
import authProvider from 'authProvider';
import routes from 'routes';

import { OfferingEdit, OfferingList, OfferingCreate } from 'offerings';
import { RestaurantEdit, RestaurantList } from 'restaurants';
import { CustomerEdit, CustomerList } from 'customers';

const fetchJson = (url: any, options: Options = {}) => {
  const header = new Headers();
  header.set('Content-Type', 'application/json');
  header.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token') ?? '""'));

  if (!options.headers) {
    // eslint-disable-next-line no-param-reassign
    options.headers = header;
  } else {
    // eslint-disable-next-line no-param-reassign
    options.headers = new Headers(options.headers);
    options.headers.set('Content-Type', 'application/json');
    options.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token') ?? '""'));
  }
  // add your own headers here
  console.info(url, options, options.headers);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(SERVER_URL + '/api', fetchJson);

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="customers" list={CustomerList} edit={CustomerEdit} show={ShowGuesser} />
      <Resource name="offerings" create={OfferingCreate} list={OfferingList} edit={OfferingEdit} show={ShowGuesser} />
      <Resource name="restaurants" list={RestaurantList} edit={RestaurantEdit} show={ShowGuesser} />

      <CustomRoutes noLayout>{routes.map((route: any) => route)}</CustomRoutes>
    </Admin>
  );
}

export default App;

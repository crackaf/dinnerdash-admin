import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList } from 'profile';
import { PostList } from 'order';
import authProvider from 'authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} requireAuth>
      <Resource name="posts" list={PostList} edit={EditGuesser} />
      <Resource name="users" list={UserList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;

import { Datagrid, List, TextField } from 'react-admin';

export const RestaurantList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="restaurantName" />
      <TextField source="colorTheme" />
      <TextField source="bannerUrl" />
    </Datagrid>
  </List>
);

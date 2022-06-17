import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="walletAmount" />
      <TextField source="phoneNumber" />
    </Datagrid>
  </List>
);

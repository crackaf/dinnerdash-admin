import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const OfferingList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="restaurantId" reference="restaurants">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="offeringName" />
      <TextField source="offeringDescription" />
      <NumberField source="price" />
      <TextField source="offeringPhotoUrl" />
    </Datagrid>
  </List>
);

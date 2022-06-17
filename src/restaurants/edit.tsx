import { Edit, SimpleForm, TextInput } from 'react-admin';

export const RestaurantEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="restaurantName" />
      <TextInput source="colorTheme" />
      <TextInput source="bannerUrl" />
    </SimpleForm>
  </Edit>
);

import { Create, SimpleForm, TextInput } from 'react-admin';

export const RestaurantEdit = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="restaurantName" />
      <TextInput source="colorTheme" />
      <TextInput source="bannerUrl" />
    </SimpleForm>
  </Create>
);

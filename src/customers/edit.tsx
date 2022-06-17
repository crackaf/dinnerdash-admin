import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <NumberInput source="customerID" disabled />
      <NumberInput source="walletAmount" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Edit>
);

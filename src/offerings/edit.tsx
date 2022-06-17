import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const OfferingEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="restaurantId" reference="restaurants">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="offeringName" />
      <TextInput source="offeringDescription" />
      <NumberInput source="price" />
      <TextInput source="offeringPhotoUrl" />
    </SimpleForm>
  </Edit>
);

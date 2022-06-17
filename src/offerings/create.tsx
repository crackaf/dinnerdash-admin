import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const OfferingCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="restaurantId" reference="restaurants">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="offeringName" />
      <TextInput source="offeringDescription" />
      <NumberInput source="price" />
      <TextInput source="offeringPhotoUrl" />
    </SimpleForm>
  </Create>
);

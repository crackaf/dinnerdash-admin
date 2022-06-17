import {
  ArrayInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';

export const OrderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="order.customerId" reference="customers" disabled>
        <SelectInput optionText="id" disabled />
      </ReferenceInput>
      <ReferenceInput source="order.restaurantId" reference="restaurants" disabled>
        <SelectInput optionText="id" disabled />
      </ReferenceInput>
      <TextInput source="order.orderTime" disabled />
      <TextInput source="order.paymentMethod" disabled />
      <TextInput source="order.orderStatus" />
      <ArrayInput source="items" disabled>
        <SimpleFormIterator>
          <ReferenceInput source="offeringId" reference="offerings" disabled>
            <SelectInput optionText="id" disabled />
          </ReferenceInput>
          <NumberInput source="quantity" disabled />
          <NumberInput source="price" disabled />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

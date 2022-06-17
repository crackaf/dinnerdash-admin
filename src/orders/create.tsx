import {
  ArrayInput,
  Create,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';

export const OrderCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="order.customerId" reference="customers">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="order.restaurantId" reference="restaurants">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="order.orderTime" />
      <TextInput source="order.paymentMethod" />
      <TextInput source="order.orderStatus" />
      <ArrayInput source="items">
        <SimpleFormIterator>
          <ReferenceInput source="offeringId" reference="offerings">
            <SelectInput optionText="id" />
          </ReferenceInput>
          <NumberInput source="quantity" />
          <NumberInput source="price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

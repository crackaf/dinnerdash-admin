import {
  ArrayField,
  DateField,
  ChipField,
  Datagrid,
  List,
  ReferenceField,
  SingleFieldList,
  TextField,
} from 'react-admin';

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="order.customerId" reference="customers">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="order.restaurantId" reference="restaurants">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="order.orderTime" />
      <TextField source="order.paymentMethod" />
      <TextField source="order.orderStatus" />
      <ArrayField source="items">
        <SingleFieldList>
          <ChipField source="orderId" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

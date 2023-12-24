import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  {
    label: 'Clothing, Shoes & Jewelry',
    value: 2,
    backgroundColor: 'orange',
    icon: 'email',
  },
  { label: 'Electronics', value: 3, backgroundColor: 'gold', icon: 'apps' },
  {
    label: 'Sports Equipment',
    value: 4,
    backgroundColor: 'green',
    icon: 'email',
  },
  { label: 'Home Goods', value: 5, backgroundColor: 'blue', icon: 'apps' },
  {
    label: 'Plants & Outdoors',
    value: 6,
    backgroundColor: 'indigo',
    icon: 'email',
  },
  { label: 'Pet Supplies', value: 7, backgroundColor: 'violet', icon: 'apps' },
  { label: 'Books', value: 8, backgroundColor: 'dodgerblue', icon: 'email' },
  { label: 'Beauty & Health', value: 9, backgroundColor: 'teal', icon: 'apps' },
  { label: 'Automotive', value: 10, backgroundColor: 'silver', icon: 'email' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

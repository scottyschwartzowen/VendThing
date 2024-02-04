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
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Automotive', value: 1, backgroundColor: '#fc5c65', icon: 'car' },
  {
    label: 'Beauty & Health',
    value: 2,
    backgroundColor: '#fd9644',
    icon: 'brush',
  },
  { label: 'Books', value: 3, backgroundColor: '#fed330', icon: 'book' },
  {
    label: 'Electronics',
    value: 4,
    backgroundColor: '#26de81',
    icon: 'camera',
  },
  { label: 'Games', value: 5, backgroundColor: '#2bcbba', icon: 'cards' },
  {
    label: 'Home Goods',
    value: 6,
    backgroundColor: '#45daf2',
    icon: 'floor-lamp',
  },
  { label: 'Pet Supplies', value: 7, backgroundColor: '#4b7bec', icon: 'cat' },
  { label: 'Plants', value: 8, backgroundColor: '#dc4c10', icon: 'flower' },
  {
    label: 'Movies & Music',
    value: 9,
    backgroundColor: '#008080',
    icon: 'headphones',
  },
  {
    label: 'Sporting Equipment',
    value: 10,
    backgroundColor: '#BCAFCF',
    icon: 'tennis',
  },
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
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          numberOfColumns={2}
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

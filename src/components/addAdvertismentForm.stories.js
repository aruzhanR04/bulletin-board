import React from 'react';
import { Provider } from 'react-redux';
import AdvertismentForm from './advertismentForm';
import store from '../store';

export default {
  title: 'Components/AdvertismentForm',
  component: AdvertismentForm,
};

export const Default = () => (
  <Provider store={store}> {/* Wrap your component with Provider and pass the Redux store */}
    <AdvertismentForm />
  </Provider>
);

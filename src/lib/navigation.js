import {createRef} from 'react';
import {CommonActions} from '@react-navigation/core';

const navigationRef = createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

export {navigate, goBack, navigationRef};

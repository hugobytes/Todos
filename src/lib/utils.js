import {defaultTo, round} from 'lodash/fp';

const calcPercentage = (amount, total) => {
  return defaultTo(0)(round((amount / total) * 100));
};

export {calcPercentage};

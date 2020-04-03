import { defaultTo, round } from 'lodash/fp'

export default (amount, total) => {
  return defaultTo(0)(round((amount / total) * 100))
}

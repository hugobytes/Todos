import { round } from 'lodash/fp'

export default (amount, total) => {
  return round((amount / total) * 100)
}

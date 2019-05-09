import scale from '@amendable/scale'
import step from './step'

export default (props = {}) => (
  scale({
    ...props,
    calculation: ({ value }) => step(value)
  })
)

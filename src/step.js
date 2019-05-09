import fluid from './fluid'

export default (n = 1, { min = 14, max = 18, ...rest } = {}) => (
  fluid(n * min, n * max, rest)
)

export default (min, max, { minWidth = 320, maxWidth = 1600 }) => (
  `calc(
    ${min}px +
    ${max - min} *
    (
      (100vw - ${minWidth}px) /
      ${maxWidth - minWidth}
    )
  )`
)

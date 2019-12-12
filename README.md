# Fluid scale

Fluid design allows you to specify less breakpoints and enable
a more adaptive user experience.

If you resize your browser window, you'll notice that the "**FLUID**" heading
below will change it's font size in proportion.

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      fluidScale(),
      inlineStyles(),
    ]}
  >
    <Box fontSize={5}>
      FLUID
    </Box>
    <Box fontSize='75px'>
      FIXED
    </Box>
  </AmendableProvider>
)
```

This is **fluid design** - it adapts to the viewport in a fluid manner. You can
think of it as a **next generation of responsive design**. Every `width`,
`height`, `padding`, `margin` and everything else that you usually specify in
`px` or `em` is now proportional to the viewport width (`vw`).

## Design rhythmn and a fluid step

If you include the `fluidScale` converter - all Amendable sizes in will use
a common step. Step is a building block that every size of your design
stems from (similar to grid).

Step is a size that is calculated from the current viewport width
(`vw`). It changes proportionally to it in a similar way that `em` changes
proportionally to the `font-size`. By default, step is fluid between
`14px` and `18px`.

> **Note**

> To make designing for edge cases easier, step is capped with minimum and
maximum viewport widths. By default, the step will not resize further
if the viewport gets smaller than `320px` or bigger than `1600px`.
So step size will always remain between `14px` and `18px`.

## Usage

Every CSS-based size property that does not have a unit (`px`, `em`, etc.)
is converted with `fluidScale`. `fontSize` of "**Heading with font size**" below
gets converted from `1` into a viewport width-based `calc` css formula.

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider resolvers={[fluidScale(), inlineStyles()]}>
    <Box fontSize={1}>
      Box with font size
    </Box>
  </AmendableProvider>
)
```

## Configure

You can pass `fluidScale` prop to `AmendableProvider` with configuration.

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[fluidScale({ min: 5, max: 30 }), inlineStyles()]}>
  >
    <Box fontSize={1}>
      Box with font size
    </Box>
  </AmendableProvider>
)
```

| Key        | Default | Description
| ---        | ---     | ---
| `min`      | `14`    | Minimum step size (in `px`) that will be used when the viewport width equals `minWidth`.
| `max`      | `18`    | Maximum step size (in `px`) that will be used when the viewport width equals `maxWidth`.
| `minWidth` | `320`   | Minimum viewport size (in `px`) beyond which step stops getting smaller.
| `maxWidth` | `1600`  | Maximum viewport size (in `px`) beyond which step stops getting bigger.

## Step calculation & formula

Step is calculated through a CSS `calc` function so the impact on performace
is minimal:

```
calc(
  ${min}px +
  (${max} - ${min}) *
  ((100vw - ${minWidth}) / (${maxWidth} - ${minWidth}))
)
```

For step `1` count, this translates to:
```
calc(
  14px +
  (18px - 14px) *
  ((100vw - 320px) / (1600px - 320px))
)
```


When rendered in the DOM, `1` is converted to:
```
calc(14px + (4px * ((100vw - 320px) / 1280)))
```

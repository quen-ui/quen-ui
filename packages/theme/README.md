# QuenUI Theme

Design system theme: tokens, variables, and a provider for use in React applications.
Provides a consistent visual style for components from `@quen-ui/components`.

## Installation

```bash
npm install @quen-ui/theme
```

## Quick Start

Wrap your app in `QuenUIProvider` so that all design system components have access to tokens and CSS variables:

```tsx
import { QuenUIProvider, QuenUIDarkTheme } from '@design-system/theme';
import { Button } from '@design-system/components';

export function App() {
  return (
    <QuenUIProvider theme={QuenUIDarkTheme}>
      <Button view="primary">Example</Button>
    </QuenUIProvider>
  );
}
```

## Tokens

The package defines design tokens: colors, typography, padding, sizes, etc.
They are available as CSS variables and JavaScript objects.


Example: using a CSS Variable

```css
.my-class {
  color: var(--quen-ui-primary-color);
  background: var(--quen-ui-color-body);
}
```

Example: using a token in code

```tsx
import { useTheme } from '@design-system/theme';

function Example() {
  const theme = useTheme();
  return <div style={{ color: theme.textColor }}>Текст</div>;
}
```

Example: using with styled-components

```ts
const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[9]}
`
```

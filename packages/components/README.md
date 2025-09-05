# quen-ui/components

A set of UI components for React applications.

## Installation

```bash
npm install @quen-ui/components @quen-ui/theme
```

## Quick start

```tsx
import { Button } from '@quen-ui/components';

export function App() {
  return (
    <div>
      <Button view="primary">Сохранить</Button>
      <Button view="secondary">Отмена</Button>
    </div>
  );
}
```

## Theme support

Components use tokens from @quen-ui/theme. Make sure the theme is enabled in your app:

```tsx
import { QuenUIProvider, QuenUIDarkTheme } from '@quen-ui/theme';
import { Button } from '@quen-ui/components';

export function App() {
  return (
    <QuenUIProvider theme={QuenUIDarkTheme}>
      <Button variant="primary">Example</Button>
    </QuenUIProvider>
  );
}
```

## [Documentation](https://quen-ui.github.io/)

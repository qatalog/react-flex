# react-flex

A browser-agnostic flexbox component with CSS gap ployfill support. Uses feature detection to ensure consistent rendering across platforms.

## Props

- `alignContent?: AlignContent` – CSS `align-content`
- `alignItems?: AlignItems` – CSS `align-items`
- `direction?: FlexDirection` – CSS `flex-direction`
- `gap?: number` – CSS `gap` in `px` units
- `justify?: JustifyContent` – CSS `justify-content`
- `wrap?: FlexWrap` – CSS `flex-wrap`
- `inline?: boolean` – CSS `display`, where `true -> inline-flex` and `false -> flex`
- `as?: React.ElementType` – Renders the `Flex` as this type of DOM element

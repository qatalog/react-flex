import { Property } from "csstype";

export type $<T> = {
  [K in keyof T as `$${Extract<K, string>}`]: T[K];
};

export type AlignContent = Property.AlignContent | undefined;

export type AlignItems = Property.AlignItems | undefined;

export type FlexDirection = Property.FlexDirection | undefined;

export type JustifyContent = Property.JustifyContent | undefined;

// NOTE: 'wrap-reverse' is omitted because it is not in our existing patterns.
// Can discuss with design if it becomes necessary.
export type FlexWrap = Exclude<Property.FlexWrap, "wrap-reverse"> | undefined;

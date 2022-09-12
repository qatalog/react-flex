import { Property } from "csstype";

export type $<T> = {
  [K in keyof T as `$${Extract<K, string>}`]: T[K];
};

export type AlignContent = Property.AlignContent | undefined;

export type AlignItems = Property.AlignItems | undefined;

export type FlexDirection = Property.FlexDirection | undefined;

export type JustifyContent = Property.JustifyContent | undefined;

export type FlexWrap = Property.FlexWrap | undefined;

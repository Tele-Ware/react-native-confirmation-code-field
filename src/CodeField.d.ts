import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import React from 'react';
declare const _default: React.ForwardRefExoticComponent<
  {
    enableMask?: Boolean
    rootStyle?: StyleProp<any>;
    textInputStyle?: StyleProp<TextStyle>;
    RootProps?: Record<string, unknown> | undefined;
    RootComponent?:
    | React.ComponentClass<any, any>
    | React.FunctionComponent<any>
    | undefined;
    cellCount?: number | undefined;
    renderCell: (options: {
      symbol: string;
      index: number;
      isFocused: boolean;
    }) => React.ReactElement<any, any>;
  } & Omit<TextInputProps, 'style'> &
  React.RefAttributes<TextInput>
>;

export default _default;

import {TextInput, View} from 'react-native';
import * as React from 'react';
import {getStyle, getSymbols} from './utils';
import useFocusState from './useFocusState';
import styles from './CodeField.styles';
const DEFAULT_CELL_COUNT = 4;
const CodeField = (
  {
    rootStyle,
    textInputStyle,
    onBlur,
    onFocus,
    value,
    renderCell,
    cellCount = DEFAULT_CELL_COUNT,
    RootProps = {},
    RootComponent = View,
    ...rest
  },
  ref,
) => {
  const [isFocused, handleOnBlur, handleOnFocus] = useFocusState({
    onBlur,
    onFocus,
  });
  const cells = getSymbols(value || '', cellCount).map(
    (symbol, index, symbols) => {
      const isFirstEmptySymbol = symbols.indexOf('') === index;
      return renderCell({
        index,
        symbol,
        isFocused: isFocused && isFirstEmptySymbol,
      });
    },
  );
  return React.createElement(
    RootComponent,
    Object.assign({}, RootProps, {style: getStyle(styles.root, rootStyle)}),
    cells,
    React.createElement(
      TextInput,
      Object.assign(
        {
          disableFullscreenUI: true,
          // Users can't paste\copy text when `caretHidden={true}` and `value={''}`
          // Because menu doesn't appear
          // See more: https://github.com/retyui/react-native-confirmation-code-field/issues/140
          caretHidden: false,
          spellCheck: false,
          autoCorrect: false,
          blurOnSubmit: false,
          clearButtonMode: 'never',
          autoCapitalize: 'characters',
          underlineColorAndroid: 'transparent',
          maxLength: cellCount,
        },
        rest,
        {
          value: value,
          onBlur: handleOnBlur,
          onFocus: handleOnFocus,
          style: getStyle(styles.textInput, textInputStyle),
          ref: ref,
        },
      ),
    ),
  );
};
export default React.forwardRef(CodeField);

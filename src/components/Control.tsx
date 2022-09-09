import React from 'react';
import {TouchableHighlight, ViewProps} from 'react-native';
import {styles} from './styles';

interface ControlProps extends ViewProps {
  callback?: () => void;
  style?: any;
  resetControlTimeout?: () => void;
}

export const Control = ({
  children,
  callback,
  style = {},
  ...props
}: ControlProps) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={() => {
        callback && callback();
      }}
      style={[styles.control, style]}
      {...props}>
      {children}
    </TouchableHighlight>
  );
};

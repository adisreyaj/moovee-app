/*
 * File: RegisterForm.tsx
 * Project: moovee-app
 * File Created: Saturday, 30th May 2020 9:18:32 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 10:20:18 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { TYPOGRAPHY } from '../../../config/typography';
import FormField, {
  FormFieldTypes,
} from '../../../components/FormField/FormField';
import { AUTH_BUTTON } from '../Shared/styles';

const RegisterForm = ({ animation }: { animation: Animated.Value }) => {
  const navigation = useNavigation();
  return (
    <Animated.View
      style={{
        opacity: animation.interpolate({
          inputRange: [0, 0.3, 0.7, 1],
          outputRange: [0, 0, 0, 1],
        }),
      }}
    >
      <View>
        <Text>Email Address</Text>
        <FormField placeholder="john@example.com" />
      </View>
      <View>
        <Text>Full Name</Text>
        <FormField placeholder="John Doe" />
      </View>
      <View>
        <Text>Password</Text>
        <FormField placeholder="**********" type={FormFieldTypes.password} />
      </View>
      <View style={{ marginTop: 24 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...AUTH_BUTTON.base,
            ...AUTH_BUTTON.primary,
          }}
          onPress={() => navigation.navigate('MAIN')}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 18,
              ...TYPOGRAPHY.body,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default RegisterForm;

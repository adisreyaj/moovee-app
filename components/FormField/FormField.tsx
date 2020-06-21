/*
 * File: Input.tsx
 * Project: moovee-app
 * File Created: Saturday, 30th May 2020 6:23:47 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 8:05:45 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export enum FormFieldTypes {
  text = 'TEXT',
  password = 'PASSWORD',
}

interface FormFieldProps {
  placeholder?: string;
  type?: FormFieldTypes;
  togglePassword?: Function;
}

const FormField = ({
  placeholder = '',
  type = FormFieldTypes.text,
  togglePassword = () => {},
}: FormFieldProps) => {
  return (
    <View
      style={{
        backgroundColor: '#EDF2F7',
        width: '100%',
        marginVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        borderRadius: 4,
        paddingHorizontal: 12,
      }}
    >
      <TextInput style={{ fontSize: 18 }} placeholder={placeholder} />
      {type === FormFieldTypes.password ? (
        <TouchableOpacity
          style={{ position: 'absolute', right: 16 }}
          onPress={() => togglePassword()}
        >
          <Ionicons name="md-eye" size={24} color="#444" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default FormField;

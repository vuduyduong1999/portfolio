import { Linking, Platform } from 'react-native';

export const callByPhone = (phone?: string) => {
  const phoneNumber = phone || '0346602086';
  let linkToPhone = '';
  if (Platform.OS === 'android') {
    linkToPhone = 'tel:${' + phoneNumber + '}';
  } else {
    linkToPhone = 'telprompt:${' + phoneNumber + '}';
  }
  Linking.openURL(linkToPhone);
};

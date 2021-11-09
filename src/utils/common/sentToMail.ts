import { Linking } from 'react-native';

import { isValidEmail } from './input';

export const sentToMail = (mail?: string) => {
  let mailString = mail;
  if (!mail || !isValidEmail(mail)) {
    mailString = 'duongmobiledev@gmail.com';
  }
  Linking.openURL(`mailto:${mailString}`);
};

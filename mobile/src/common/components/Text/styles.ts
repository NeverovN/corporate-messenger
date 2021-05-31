import { StyleSheet } from 'react-native';

import { TextType } from 'common/types/styles';

// TODO: fontFamily
export default StyleSheet.create({
  [TextType.PRIMARY]: {
    fontSize: 13,
  },
  [TextType.SUB_TITLE]: {
    fontSize: 10,
  },
  [TextType.TITLE]: {
    fontSize: 17,
  },
});

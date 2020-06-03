import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
    color: '#344356'
  },
  img: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  containerInput: {
    flexDirection: 'row',
  },
  toggleButton: {
    marginRight: 15,
    zIndex: 4,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});

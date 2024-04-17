import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';
import LoginScreen from './LoginScreen';

const LINKING_ERROR =
  `The package 'react-native-verified' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type VerifiedProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'VerifiedView';

export const VerifiedView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<VerifiedProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export {LoginScreen};

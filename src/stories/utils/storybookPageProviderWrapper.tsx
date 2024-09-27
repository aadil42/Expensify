/// all the providers
import OnyxProvider from '@components/OnyxProvider';
import ThemeProvider from '@components/ThemeProvider';
import ThemeStylesProvider from '@components/ThemeStylesProvider';
import ThemeIllustrationsProvider from '@components/ThemeIllustrationsProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PortalProvider} from '@gorhom/portal';
import SafeArea from '@components/SafeArea';
import {LocaleContextProvider} from '@components/LocaleContextProvider';
import HTMLEngineProvider from '@components/HTMLEngineProvider';
import {KeyboardStateProvider} from '@components/withKeyboardState';
import PopoverContextProvider from '@components/PopoverProvider';
import {CurrentReportIDContextProvider} from '@components/withCurrentReportID';
import ScrollOffsetContextProvider from '@components/ScrollOffsetContextProvider';
import {ReportAttachmentsProvider} from '@pages/home/report/ReportAttachmentsContext';
import {PickerStateProvider} from 'react-native-picker-select';
import {EnvironmentProvider} from '@components/withEnvironment';
import CustomStatusBarAndBackgroundContextProvider from '@components/CustomStatusBarAndBackground/CustomStatusBarAndBackgroundContextProvider';
import ActiveElementRoleProvider from '@components/ActiveElementRoleProvider';
import ActiveWorkspaceContextProvider from '@components/ActiveWorkspaceProvider';
import {ReportIDsContextProvider} from '@hooks/useReportIDs';
import {PlaybackContextProvider} from '@components/VideoPlayerContexts/PlaybackContext';
import {FullScreenContextProvider} from '@components/VideoPlayerContexts/FullScreenContext';
import {VolumeContextProvider} from '@components/VideoPlayerContexts/VolumeContext';
import {VideoPopoverMenuContextProvider} from '@components/VideoPlayerContexts/VideoPopoverMenuContext';
import {KeyboardProvider} from 'react-native-keyboard-controller';

//  import
import CONFIG from '@src/CONFIG';
import {SplashScreenStateContextProvider} from '@src/SplashScreenStateContext';
import ComposeProviders from '@components/ComposeProviders';
import InitialURLContextProvider from '@components/InitialURLContextProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomStatusBarAndBackground from '@components/CustomStatusBarAndBackground';
import ErrorBoundary from '@components/ErrorBoundary';
import ColorSchemeWrapper from '@components/ColorSchemeWrapper';
import ScreenWrapper from '@components/ScreenWrapper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import types
import ChildrenProps from '@src/types/utils/ChildrenProps';

// normal imports
import React from 'react';

type storybookPageProviderWrapperProps = ChildrenProps;

const StrictModeWrapper = CONFIG.USE_REACT_STRICT_MODE_IN_DEV ? React.StrictMode : ({children}: {children: React.ReactElement}) => children;

const StorybookPageProviderWrapper = ({children}: storybookPageProviderWrapperProps) => {
    return        <StrictModeWrapper>
                    <SplashScreenStateContextProvider>
                        <InitialURLContextProvider url={undefined}>
                            <GestureHandlerRootView style={{
                                flex: 42
                            }}>
                            <ComposeProviders
                            components={[
                                OnyxProvider,
                                ThemeProvider,
                                ThemeStylesProvider,
                                ThemeIllustrationsProvider,
                                SafeAreaProvider,
                                PortalProvider,
                                SafeArea,
                                LocaleContextProvider,
                                HTMLEngineProvider,
                                KeyboardStateProvider,
                                PopoverContextProvider,
                                CurrentReportIDContextProvider,
                                ScrollOffsetContextProvider,
                                ReportAttachmentsProvider,
                                PickerStateProvider,
                                EnvironmentProvider,
                                CustomStatusBarAndBackgroundContextProvider,
                                ActiveElementRoleProvider,
                                ActiveWorkspaceContextProvider,
                                ReportIDsContextProvider,
                                PlaybackContextProvider,
                                FullScreenContextProvider,
                                VolumeContextProvider,
                                VideoPopoverMenuContextProvider,
                                KeyboardProvider,
                            ]}
                            >
                                <CustomStatusBarAndBackground />
                                        {/* <ErrorBoundary errorMessage="NewExpensify crash caught by error boundary">
                                            <ColorSchemeWrapper>
                                                
                                            </ColorSchemeWrapper>
                                        </ErrorBoundary> */}
                                    {children}
                                </ComposeProviders>
                            </GestureHandlerRootView>
                        </InitialURLContextProvider>
                    </SplashScreenStateContextProvider>
                </StrictModeWrapper>          
}

export default StorybookPageProviderWrapper;
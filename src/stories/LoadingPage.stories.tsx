import React from 'react';
import type {Meta} from '@storybook/react';
import LoadingPage from '@pages/LoadingPage';
import StorybookPageProviderWrapper from './utils/storybookPageProviderWrapper';

type LoadingPageProps = {
    /** Method to trigger when pressing back button of the header */
    onBackButtonPress?: () => void;
    title: string;
};

const story: Meta = {
    title: 'Pages/LoadingPage',
    component: LoadingPage,
    args: {
        onBackButtonPress: () => {},
        title: "this is title from main args",
    }
};


function Template({onBackButtonPress, title}: LoadingPageProps) {

    const wrappedComponent = <LoadingPage 
        onBackButtonPress={onBackButtonPress}
        title={title}
        />;
    return (
        <StorybookPageProviderWrapper>
            {wrappedComponent}
        </StorybookPageProviderWrapper>
    );
}


                                    
const Default = Template.bind({});


export default story;
export {Default}

import type {StoryFn} from '@storybook/react';
import React, {useState, useCallback} from 'react';
import type {BannerProps} from '@components/Banner';
import Banner from '@components/Banner';
import type {SvgProps} from 'react-native-svg/lib/typescript';


// get  icons
import * as Expensicons from '@components/Icon/Expensicons';
import alianIcon from '@assets/images/alian.svg';

type BannerStory = StoryFn<typeof Banner>;


// our image icon
// const ImageIcon: React.FC<SvgProps> = () => {
//     return <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z" fill="#000000"></path> </g></svg>;
// }


/** 
 * We use the Component Story Format for writing stories. Follow the docs here:
 *
 * https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
 */
const story = {
    title: 'Components/Banner',
    component: Banner,
};

function Template(props: BannerProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    const dismissBanner = useCallback(()=> {
        setIsBannerVisible(false);
    }, []);

    return (isBannerVisible && <Banner 
            onClose={dismissBanner}
            {...props} 
            /> )|| <></>;
}

// Arguments can be passed to the component by binding
// See: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const MyBanner: BannerStory = Template.bind({});
MyBanner.args = {
    text: "This is aadil42 banner",
    icon: alianIcon,
    iconHeight: 24,
    iconWidth: 24,
    onPress: () => {
        alert("humba bumba");
    }
}

const InfoBanner: BannerStory = Template.bind({});
InfoBanner.args = {
    text: 'This is an informational banner',

};

const HTMLBanner: BannerStory = Template.bind({});
HTMLBanner.args = {
    text: 'This is a informational banner containing <strong><em>HTML</em></strong>',
    shouldRenderHTML: true,
};

const BannerWithLink: BannerStory = Template.bind({});
BannerWithLink.args = {
    text: 'This is a informational banner containing <a href="https://new.expensify.com/settings">internal Link</a> and <a href=" https://google.com">public link</a>',
    shouldRenderHTML: true,
};

export default story;
export {InfoBanner, HTMLBanner, BannerWithLink, MyBanner};

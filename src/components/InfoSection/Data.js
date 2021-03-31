import Svg1 from '../../images/svg-1.svg'
import Svg2 from '../../images/svg-2.svg'
import Svg3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: Svg1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you located. All ypu need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Svg2,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready inunder 10 minutes. All you need to do is add your information and you're ready to go. ",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Svg3,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true
};
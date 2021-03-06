import {TextWithTranslation} from "./utils/localisation";

import allure from './assets/images/allure.jpg'
import aboutMePhoto from './assets/images/about-me-photo.jpg'
import workPhoto from './assets/images/work-photo.jpg'
import contactsPhoto from './assets/images/contacts-photo.jpg'
import shivaPhoto from './assets/images/shiva-min.jpg'
import warhammerPhoto from './assets/images/warhammer-min.jpg'
import bicyclePhoto from './assets/images/bicycle-min.jpg'
import vkLogo from './assets/images/vk-64x64.png'
import phoneLogo from './assets/images/phone-64x64.png'
import telegramLogo from './assets/images/telegram-64x64.png'
import instagramLogo from './assets/images/instagram.png'
import githubLogo from './assets/images/github.png'
import ordersMapPhoto from './assets/images/map-photo.png'
import dlims from './assets/images/dlims-photo.png'
import e2eStep from './assets/images/e2e-step-def.png'
import ordersBoard from './assets/images/orders-board.png'

export type ImageSource = {
    source: string;
    desc: string;
}

export const COLORS = {
    primaryColor: '#344955',
    primaryDark: '#232F34',
    primaryLight: '#4A6572',
    secondaryColor: '#E99922',
    secondaryLight: '#F9AA33',
    textWhite: '#f5f5f5',
    grey: '#999999',
}

export const Images: Record<string, ImageSource> = {
    ALLURE_IMG: {
        source: allure, desc: 'allure'
    },
    E2E_STEP_IMG: {
        source: e2eStep, desc: 'e2eStep'
    },
    ORDERS_MAP_IMG: {
        source: ordersMapPhoto, desc: 'ordersMap'
    },
    DLIMS_IMG: {
        source: dlims, desc: 'subscriptions'
    },
    ABOUT_ME_IMG: {
        source: aboutMePhoto, desc: 'aboutMePhoto'
    },
    WORK_ME_IMG: {
        source: workPhoto, desc: 'workMePhoto'
    },
    CONTACTS_ME: {
        source: contactsPhoto, desc: 'contactsMePhoto'
    },
    SHIVA_IMG: {
        source: shivaPhoto, desc: 'shiva'
    },
    WARHAMMER_IMG: {
        source: warhammerPhoto, desc: 'warhammer'
    },
    BICYCLE_IMG: {
        source:bicyclePhoto , desc: 'bicycle'
    },
    VK_LOGO: {
        source: vkLogo, desc: 'vk_logo'
    },
    TELEGRAM_LOGO: {
        source: telegramLogo, desc: 'telegram_logo'
    },
    PHONE_LOGO: {
        source: phoneLogo, desc: 'phone_logo'
    },
    INSTAGRAM_LOGO: {
        source: instagramLogo, desc: 'instagram_logo'
    },
    GITHUB_LOGO: {
        source: githubLogo, desc: 'github_logo'
    },
    ORDERS_BOARD: {
        source: ordersBoard, desc: 'orders_board'
    }
};

export type HeaderLinksText = {
    work: string,
    about: string,
    contacts: string,
}

export type WorkTexts = {
    header: string;
    testing: InfoTexts;
    development: InfoTexts;
}

export type InfoTexts = {
    header: string,
    mainData: string;
    skills?: string;
    continue: string;
}

export type MainTexts = {
    header: string;
    headerLinks: HeaderLinksText;
    welcome: string;
}

export type ContactsTexts = {
    header: string;
    name: string;
}

type MultiLanguageTexts = {
    mainTexts: TextWithTranslation<MainTexts>;
    aboutTexts: TextWithTranslation<InfoTexts>,
    workTexts: TextWithTranslation<WorkTexts>,
    contactsTexts: TextWithTranslation<ContactsTexts>,
}

export const multiLanguageTexts: MultiLanguageTexts = {
    mainTexts: {
        en: {
            header: 'Slava. K',
            headerLinks: {
                work: 'Work',
                about: 'About',
                contacts: 'Contacts',
            },
            welcome: 'Welcome to my resume',
        },
        ru: {
            header: '????????????????. ??',
            headerLinks: {
                work: '????????????',
                about: '?????? ??????',
                contacts: '????????????????',
            },
            welcome: '???????????? ?? ???????? ????????????'
        }
    },
    aboutTexts: {
        en: {
            header: 'About me',
            mainData: 'Hi, I???m Viacheslav Kolesnikov.\n ' +
                'Currently I am a FrontEnd developer in the PROFI customer service team. In my career, I went from a junior tester to Senior QA, and then,' +
                ' changing the track, became a React-Native and React developer. \n\n' +
                'I graduated from the "Research University of Moscow Institute of Electronic Technology"' +
                ' with a degree in Software Engineering. It was very interesting to study, we had courses on DBMS, software testing, algorithms, OOP and design patterns that' +
                ' came in handy in my work. I love sports, cycling in the summer and snowboarding in the winter, it helps to keep fit and unload my head during hard work' +
                ' days. I also enjoy board games, participating in tournaments and decorating miniatures in the Warhammer 40k universe.',
            continue: '... Read more',
        },
        ru: {
            header: '?????? ??????',
            mainData: '????????????, ?? ???????????????? ????????????????????.\n ' +
                '?? ?????????????? ???????????? ?? FrontEnd ?????????????????????? ?? ?????????????? ?????????????????????? ?????????????? ??????????. ?? ?????????? ?????????????? ?? ???????????? ???????? ???? ???????????????? ?????????????????????? ' +
                '???? ???????????????????????? ???? Senior QA, ?? ??????????, ???????????? ??????????, ???????? React-Native ?? React ??????????????????????????. \n\n' +
                '?? ???????????????? "???????????? ?????????????????????????????????? ?????????????????????? ???????????????????? ???????????????? ?????????????????????? ' +
                '??????????????" ???? ?????????????????????????? "?????????????????????? ??????????????????". ?????????????? ???????? ?????????? ??????????????????, ?? ?????? ???????? ?????????? ???? ????????, ???????????????????????? ????, ????????????????????, ?????? ?? ?????????????????? ????????????????????????????, ?????????????? ' +
                '?????????????????????? ?????? ?? ????????????.\n\n' +
                '?? ?????????????????? ?????????? ?? ?????????? ???????????????????? ??????????????, ?????????????????????? ?????????? ?? ???????????????????? ??????????, ?????? ???????????????? ???????????????????????? ???????? ?? ?????????? ?? ???????????????????? ???????????? ?? ?????????????? ?????????????? ??????. ?????? ???? ?? ' +
                '?????????????????? ?????????????????????? ????????????, ???????????????? ?? ???????????????? ?? ???????????????????????????? ?????????????????????? ???????????????? ?? ?????????????????? Warhammer 40k',
            continue: '... ??????????',
        },
    },
    workTexts: {
        en: {
            header: 'Work',
            testing: {
                header: 'Testing',
                mainData: "In 2017 I graduated from the university and got a job at Profi.ru as a junior " +
                    "testing specialist, in the future, leaving this position as a Senior QA. I joined the mobile development team and immediately got into work. The mentor quickly taught " +
                    "me how to use Jira as a task and bug tracker, I began to closely engage in functional testing, regression testing, writing test cases and checklists. \n\n" +
                    "The company had a positive attitude towards employee initiatives, and due to the specialty of the sprints, I started to have free time, and my team lead and I decided to " +
                    "try to automate some of the regressions. From university, I had Java programming skills and the first version of automation was implemented on the BDD framework JBehave, " +
                    "and then, after reflecting on the results, we decided to switch to JS and WebdriverIO. As a result, we have reduced the time for regression testing of both platforms of " +
                    "the mobile application in a team from 1-2 days to 4-6 hours.",
                skills: 'Skills: Agile, Scrum, Jira, BDD, Manual testing, Regression testing, Mobile testing, Automated testing, WDIO, WebdriverIO',
                continue: '... Read more',
            },
            development: {
                header: 'Development',
                mainData: "I have been developing mobile and web applications since 2019. I originally started as a React-Native developer. My team and I worked on a new application for executors, " +
                    "which replaced old Kotlin and Swift applications. I have solved many tasks of transferring functionality to a new platform and improving it: creating the client side of " +
                    "filters for finding the necessary orders, a Cross-Sell system, in-app notifications, and many others.\n\n Over time, the company began to update the site for executors with " +
                    "the subsequent transition to React, in which I also take an active part, developing not only visual components, but also low-level logic of the new orders board, " +
                    "including: the logic of universal pagination, return to the board page without reloading content, analytics of objects entering the viewport, and much more. \n\n" +
                    "Now I am a developer at PROFI, who is not afraid of new challenges and is always ready to learn.",
                skills: 'Skills: TypeScript, JavaScript, CSS, React, React-Native, Flow, Jira, Agile, Scrum',
                continue: '... Read more',
            },
        },
        ru: {
            header: '????????????',
            testing: {
                header: '????????????????????????',
                mainData: '?? 2017 ???????? ?? ???????????????? ?????????????????????? ?? ?????????????????? ?? ?????????? ?? ???????????????? ???????????????? ?????????????????????? ???? ????????????????????????, ' +
                    '?? ??????????????, ?????????????? ?????? ?????????????????? ?? ???????????????? Senior QA. ?? ?????????? ?? ?????????????? ?????????????????? ???????????????????? ?? ?????????? ?????????????????? ?? ????????????. ???????????? ???????????? ?????????????? ???????? ???????????????????????? Jira ?? ???????????????? ???????? ?? ' +
                    '?????? ??????????????, ?? ?????????? ???????????? ???????????????????? ???????????????????????????? ?????????????????????????? ??????????, ?????????????????????????? ??????????????????????????, ???????????????????????? ???????? ???????????? ?? ??????????????????. \n\n' +
                    '???????????????? ???????????????????????? ???????????????????? ?? ?????????????????????? ????????????????????, ?? ????-???? ???????????????????????? ???????????????? ?? ???????? ???????????? ???????????????????? ?????????????????? ??????????, ?? ???? ?? ???????? ???????????????? ?????????????? ?????????????? ?????????????????????? ?????????????? ' +
                    '?????????????????????????? ?????????? ??????????????????. ?? ???????????????????????? ?? ???????? ???????? ???????????? ???????????????????????????????? ???? Java ?? ???????????? ???????????? ?????????????????????????? ???????? ?????????????????????? ???? BDD ???????????????????? JBehave, ?? ??????????, ?????????????????????????????? ' +
                    '?????? ???????????????????????? ???? ???????????? ?????????????? ???? JS ?? WebdriverIO. ?? ?????????? ???? ?????????????????? ?????????? ???????????????????????????? ???????????????????????? ?????????? ???????????????? ???????????????????? ???????????????????? ?? ?????????????? ?? 1-2 ???????? ???? 4-6 ??????????.',
                skills: '????????????: Agile, Scrum, Jira, BDD, Manual testing, Regression testing, Mobile testing, Automated testing, WDIO, WebdriverIO',
                continue: '... ??????????',
            },
            development: {
                header: '????????????????????',
                mainData: "?? ?????????????????? ?????????????????????? ?????????????????? ?? Web ???????????????????? ?? 2019 ????????. ???????????????????? ?? ?????????? ?????? React-Native ??????????????????????. ???? ?? ???????????????? ?????????????????? ?????? ?????????? ?????????????????????? ?????? " +
                    "????????????????????????, ?????????????? ???????????? ???? ???????????? ???????????? ???????????????????? ???? Kotlin ?? Swift. ?? ?????????? ?????????? ?????????? ???? ???????????????? ?????????????????????? ???? ?????????? ?????????????????? ?? ?????? ????????????????????????????????????: " +
                    "???????????????? ???????????????????? ?????????? ???????????????? ?????? ???????????? ???????????? ??????????????, ?????????????? Cross-Sell, in-app ?????????????????????? ?? ???????????? ????????????.\n\n ???? ???????????????? ???????????????? ???????????? ?????????????????? ???????? ?????? " +
                    "???????????????????????? ?? ?????????????????????? ?????????????????? ???? React, ?? ?????? ?? ?????? ???? ???????????? ???????????????? ??????????????, ?????????????????? ?????????????????????? ???? ???????????? ???????????????????? ??????????????????????, ???? ?? ???????????????????????????? ???????????? " +
                    "???????????? ?????????? ?????????? ??????????????, ?? ?????? ??????????: ???????????? ?????????????????????????? ??????????????????, ???????????????? ???? ???????????????? ?????????? ?????? ???????????????????????? ????????????????, ?????????????????? ?????????????????? ???????????????? ???? ?????????????? ?? ???????????? ????????????. \n\n" +
                    "???????????? ?? developer ?? ??????????, ?????????????? ???? ???????????? ?????????? ?????????????? ?? ???????????? ?????????? ??????????????.",
                skills: '????????????: TypeScript, JavaScript, CSS, React, React-Native, Flow, Jira, Agile, Scrum',
                continue: '... ??????????',
            },
        },
    },
    contactsTexts: {
        en: {
            header: 'Contacts',
            name: 'Viacheslav Kolesnikov',
        },
        ru: {
            header: '????????????????',
            name: '???????????????? ????????????????????',
        }
    }
};

import React from "react";
import {ContactsTexts, Images} from "../constants";
import './ContactCard.css';
import '../screen/Resume.css';

type Contact = {
    type: 'text' | 'link';
    img: string;
    text: string;
    link?: string;
}
const contactsArray: Contact[] = [
    {
        type: 'link',
        img: Images.TELEGRAM_LOGO.source,
        text: 'DazzlingFame',
        link: 'https://t.me/DazzlingFame',
    },
    {
        type: 'link',
        text: 'dazzling_fame_',
        img: Images.INSTAGRAM_LOGO.source,
        link: 'https://instagram.com/dazzling_fame_'
    },
    {
        type: 'link',
        text: 'DazzlingFame',
        img: Images.GITHUB_LOGO.source,
        link: 'https://github.com/DazzlingFame'
    },
    {
        text: 'Dazzling Fame',
        type: 'link',
        img: Images.VK_LOGO.source,
        link: 'https://vk.com/dazzling_fame'
    },
    {
        type: 'link',
        img: Images.PHONE_LOGO.source,
        text: '+7(977)882-01-26',
        link: 'tel:+7977-882-0126'
    }
];

type Props = {
    texts: ContactsTexts;
}

const ContactCard: React.FC<Props> = ({texts}) => {
    const contactItems = contactsArray.map(item => (
        <a key={item.link} className="contact_card__contact_item__container " href={item.link}>
            <img className="contact_card__contact_item__image" src={item.img} alt={item.text}/>
            <span className="contact_card__contact_item__text">{item.text}</span>
        </a>
    ));

    return (
        <div className='contact_card__root_container'>
            <p className={'bold_subheader_text'}>
                {texts.header}
            </p>
        <div className="contact_card__container">
            <div className="contact_card__block_container">
                <img src={Images.CONTACTS_ME.source} alt="contact_photo" className="contact_photo"/>
                <span className="regular_text contact_name">{texts.name}</span>
            </div>
            <div className="contact_card__block_container">
                {contactItems}
            </div>
        </div>
        </div>
    )
};

export default ContactCard;

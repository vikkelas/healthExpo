import {string} from "prop-types";

interface FormWhomItem {
  title: string;
  imgUrl: string;
  alt: string;
}

interface ThematicSection {
  id: number
  title: string;
  text: string;
  imgUrl:string;
}

export interface PavilionInfo {
  title: string,
  area: number,
  humans: number
}

export interface VideoLink {
  link: string
}

export interface AboutExpoContent {
  title: string;
  iconName: string;
}

interface PastEvents {
  nameFile: string;
}
export interface DataFile {
  fromWhom: FormWhomItem[];
  thematicSection: ThematicSection[];
  pavilionInfo: PavilionInfo[];
  pastEvent: PastEvents[];
  videoLink: VideoLink[];
  aboutExpo: AboutExpoContent[];
}

const data:DataFile = {
  fromWhom: [
    {
      title:"производители, дистрибьюторы лекарственных аппаратов и БАДов",
      imgUrl:"/images/icon1.png",
      alt: "выставка здоровье Expo для представителей и дистрибьюторов"
    },
    {
      title:"владельцы, руководители и закупщики оптово-розничной торговли",
      imgUrl:"/images/icon2.png",
      alt: "Здоровье Expo для владельцев и руководителей"
    },
    //  Смена иконки
    {
      title:"восточная медицина и различные техники массажа",
      imgUrl:"/images/icon4.png",
      alt: "Выставка на ВДНХ для медработников и массажистов"
    },
    //  Смена иконки
    {
      title:"Продукты для здорового питания",
      imgUrl:"/images/icon3.png",
      alt: "Здоровье EXPO для потребителей"
    }
  ],
  thematicSection: [
    {
      id: 1,
      title: 'Натуральные лекарственные препараты',
      text: 'Гомеопатия, БАДы, травы, целебные сборы, эликсиры, бальзамы, сиропы, аюрведа, витаминно-минеральные оздоровительные комплексы',
      imgUrl: 'thematicimg1-min.webp',
    },
    {
      id:2,
      title: 'Медицинские и оздоровительные центры',
      text: 'Лечение позвоночника, мануальная терапия, массажи разного вида, диагностика систем организма, традиционная выставочная медицина, традиционная восточная медицина, санаторно-курортное лечение и услуги в сфере здоровья, фитоаптеки, Йога-центры.',
      imgUrl: 'thematicimg2-min.webp',
    },
    {
      id:3,
      title: 'Медицинская косметика и средства гигиены',
      text: 'Натуральная, органическая, аюрведическая и эко-косметика, косметика для беременных и кормящих, безопасная детская косметика, гипоаллергенная косметика, косметика из натуральных масел. Салоны красоты, SPA салоны',
      imgUrl: 'thematicimg3-min.webp',
    },
    {
      id: 4,
      title: 'Восточная медицина и традиционный массаж',
      text: 'Массажи - индийских, китайских, вьетнамских специалистов. Оборудование и технологии разных стран. Тренажеры и прочая продукция для укрепления здоровья.',
      imgUrl: 'thematicimg4-min.webp',
    },
    {
      id: 5,
      title: 'Натуральная аптека монастырей',
      text: 'Экотовары. Духовное направление и исцеление от болезней(познай себя и будешь счастлив), лечение зависимости от страстей. Паломничество в монастыри по Святой Руси. Выступление священнослужителей, профессоров.',
      imgUrl: 'thematicimg5-min.webp',
    },
    {
      id: 6,
      title: 'Продукты для здорового питания',
      text: 'Мёд и продукция пчеловодства, пробиотические продукты, соевые и зерновые продукты, растительные масла, оливки, вода, соки, чай, орехи, грибы, ягоды, сухофрукты, сладости на натуральной основе, пряности и специи, деликатесные продукты. Система здорового питания, рецепты.',
      imgUrl: 'thematicimg6-min.webp',
    },
    {
      id: 7,
      title: 'Технические средства для поддержания здорового образа жизни',
      text: 'Медтехника для пользования, для домашнего лечения и диагностики, водо- и воздухоочистители, ионизаторы воздуха, экологически чистая посуда, массажеры, спортивное питание, тренажеры, медицинские препараты, ортопедические изделия.',
      imgUrl: 'thematicimg7-min.webp',
    },
    {
      id: 8,
      title: 'Здоровье и красота без лекарств',
      text: 'Оздоровительные методики, ароматерапия, оптика и аппараты для восстановления зрения, дыхательная техника, очищение организма, духовные практики, ортопедические и корсетные изделия.',
      imgUrl: 'thematicimg8-min.webp',
    },
    {
      id: 9,
      title: 'Изделия из натуральных материалов',
      text: 'Одежда из шерсти, льна, шёлка, хлопка, кожи, изделия из дерева и камня.',
      imgUrl: 'thematicimg9-min.webp',
    }
  ],
  pavilionInfo: [
    {
      title: 'Выставочный зал',
      area: 2100,
      humans: 700
    },
    {
      title: 'Лекционный класс',
      area: 72,
      humans: 60
    },
    {
      title: 'Переговорная комната',
      area: 69,
      humans: 20
    }
  ],
  pastEvent: [
    {
      nameFile: '1.jpg'
    },
    {
      nameFile: '2.jpg'
    },
    {
      nameFile: '3.jpg'
    },
    {
      nameFile: '4.jpg'
    },
    {
      nameFile: '5.jpg'
    },
    {
      nameFile: '6.jpg'
    },
    {
      nameFile: '7.jpg'
    },
    {
      nameFile: '8.jpg'
    },
    {
      nameFile: '9.jpg'
    },
  ],
  videoLink: [
    {
      link: 'https://www.youtube.com/embed/CQuLmdC8hkA'
    },
    {
      link: 'https://www.youtube.com/embed/HZh4-WBzRbc'
    },
    {
      link: 'https://www.youtube.com/embed/nc7UDJt8KUU'
    },
    {
      link: 'https://www.youtube.com/embed/l0lXhafGwdQ'
    },
    {
      link: 'https://www.youtube.com/embed/3NMP5Jdkl4M'
    },
    {
      link: 'https://www.youtube.com/embed/uzSPfgyXVbk'
    },
    {
      link: 'https://www.youtube.com/embed/N6uhZC2F2-g'
    },
    {
      link: 'https://www.youtube.com/embed/5dDXtdDQ0m8'
    },
    {
      link: 'https://www.youtube.com/embed/OMNbG249T-4'
    },
  ],
  aboutExpo: [
    {
      title: 'Системы реабилитации, восстановления; ортопедия.',
      iconName: 'free-icon-joint-7292491.png'
    },
    {
      title: 'Реабилитационное и санаторно-курортное лечение.',
      iconName: 'free-icon-resort-327424.png'
    },
    {
      title: 'Центры эстетической медицины и оздоровления.',
      iconName: 'free-icon-bonsai-2220097.png'
    },
    {
      title: 'Натуральные лекарства, БАДы.',
      iconName: 'free-icon-natural-medicine-2754696.png'
    },
    {
      title: 'Натуральная косметика.',
      iconName: 'free-icon-cosmetic-7259007.png'
    },
    {
      title: 'Медицинские приборы для использования дома.',
      iconName: 'free-icon-massager-5513407.png'
    },
    {
      title: 'Технологии сохранения красоты и здоровья без лекарств.',
      iconName: 'free-icon-diet-2876997.png'
    },
    {
      title: 'Массаж, тренажёры.',
      iconName: 'free-icon-massage-436674.png'
    },
    {
      title: 'Органические и био-продукты питания.',
      iconName: 'free-icon-bio-1656193.png'
    },
    {
      title: 'Системы здорового питания, особые продукты и рецепты.',
      iconName: 'free-icon-healthy-food-2756708.png'
    },
    {
      title: 'Изделия из натуральных материалов. Одежда.',
      iconName: 'free-icon-clothes-hanger-2357063.png'
    },
    {
      title: 'Товары для здоровья детей.',
      iconName: 'free-icon-children-3885025.png'
    },
    {
      title: 'Товары и услуги для здорового образа жизни.',
      iconName: 'free-icon-excercise-2533667.png'
    }
  ]
};
export default data;

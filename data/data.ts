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

interface Members {
  imgName: string;
  text: string;
}

export interface MembersInfo {
  title: string;
  listItem: string[];
  imgUrl: string[];
  alt: string
}

export interface DataFile {
  thematicSection: ThematicSection[];
  pavilionInfo: PavilionInfo[];
  pastEvent: PastEvents[];
  videoLink: VideoLink[];
  aboutExpo: AboutExpoContent[];
  members: Members[];
  membersInfo: MembersInfo[]
}

const data:DataFile = {
  thematicSection: [
    {
      id: 1,
      title: 'Натуральные лекарственные препараты',
      text: 'Витаминные комплексы, гомеопатия, БАДы, травы, эликсиры, бальзамы, сиропы, аюрведа.',
      imgUrl: 'thematicimg1-min.webp',
    },
    {
      id:2,
      title: 'Медицинские и оздоровительные центры',
      text: 'Лечение позвоночника, мануальная терапия, массажи, диагностика организма, санаторно-курортное лечение и услуги в сфере здоровья, фитоаптеки, йога-центры.',
      imgUrl: 'thematicimg2-min.webp',
    },
    {
      id:3,
      title: 'Натуральная косметика, гигиена, косметические центры',
      text: 'Аюрведическая и эко-косметика, детская косметика, косметика для беременных и кормящих, гипоаллергенная косметика. Салоны красоты, SPA салоны.',
      imgUrl: 'thematicimg3-min.webp',
    },
    {
      id: 4,
      title: 'Восточная медицина и различные техники массажа',
      text: 'Массажи индийских, китайских, вьетнамских специалистов, а также классические техники массажа.',
      imgUrl: 'thematicimg4-min.webp',
    },
    {
      id: 5,
      title: 'Продукция монастырей и общение с духовенством',
      text: 'Экотовары из монастырей. Духовное направление и исцеление от болезней, лечение зависимости от страстей. Паломничество в монастыри Святой Руси. Выступления священнослужителей о духовно-нравственном направлений в жизни каждого человека.',
      imgUrl: 'thematicimg5-min.webp',
    },
    {
      id: 6,
      title: 'Продукты для здорового питания',
      text: 'Мёд и продукция пчеловодства, пробиотические продукты, соевые и зерновые продукты, растительные масла,напитки, орехи, грибы, ягоды, сухофрукты, сладости на натуральной основе, специи, деликатесы. Системы здорового питания, спортивное питание.',
      imgUrl: 'thematicimg6-min.webp',
    },
    {
      id: 7,
      title: 'Технические средства для поддержания здоровья',
      text: 'Медтехника для домашнего лечения и диагностики, очистители воды и воздуха, ионизаторы воздуха, экологически чистая посуда, массажёры, тренажёры, ортопедические изделия.',
      imgUrl: 'thematicimg7-min.webp',
    },
    {
      id: 8,
      title: 'Здоровье и красота без лекарств',
      text: 'Оздоровительные методики, ароматерапия, духовные практики,  оптика и аппараты для восстановления зрения, дыхательная техника, очищение организма, ортопедические и корсетные изделия.',
      imgUrl: 'thematicimg8-min.webp',
    },
    {
      id: 9,
      title: 'Выбор комфортного матраса, для восстановления вашего здоровья.',
      text: 'Узнаете о производителях матрасов, описание моделей, о наполнителях и получите советы по выбору матраса',
      imgUrl: 'thematicimg9-min.webp',
    }
  ],
  pavilionInfo: [
    {
      title: 'Выставочный зал',
      area: 1114,
      humans: 700
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
      link: 'https://www.youtube.com/embed/HZh4-WBzRbc'
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
      link: 'https://www.youtube.com/embed/CQuLmdC8hkA'
    },
    {
      link: 'https://www.youtube.com/embed/nc7UDJt8KUU'
    },
  ],
  aboutExpo: [
    {
      title: 'Оздоровительные центры и санаторно-курортное лечение.',
      iconName: 'free-icon-resort-327424.png'
    },
    {
      title: 'Центры эстетической медицины и спа.',
      iconName: 'free-icon-bonsai-2220097.png'
    },
    {
      title: 'Натуральные лекарственные препараты.',
      iconName: 'free-icon-natural-medicine-2754696.png'
    },
    {
      title: ' Натуральная косметика и средства гигиены.',
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
      title: 'Восточная медицина, различные техники массажа.',
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
      title: 'Подбор комфортного матраса, для восстановления вашего здоровья.',
      iconName: 'free-icon-air-mattress-2357059.png'
    },
    {
      title: 'Товары для здоровья детей.',
      iconName: 'free-icon-children-3885025.png'
    },
    {
      title: 'Товары и услуги для здорового образа жизни.',
      iconName: 'free-icon-excercise-2533667.png'
    }
  ],
  members: [
    {
      imgName: '1.png',
      text: 'мастер-классы'
    },
    {
      imgName: '2.png',
      text: 'презентации'
    },
    {
      imgName: '3.png',
      text: 'семинары'
    },
    {
      imgName: '4.png',
      text: 'консультации специалистов'
    },

  ],
  membersInfo: [
    {
      title: 'А также в программе выставки:',
      listItem: [
          'презентации продукции фирмами–производителями,',
          'встречи с авторами методик оздоровления, ',
          'демонстрация упражнений естественного оздоровления, ',
          'розыгрыши призов.'
      ],
      imgUrl: [
          '/visitors/1.webp',
          '/visitors/2.webp',
          '/visitors/3.webp',
          '/visitors/4.webp'
      ],
      alt: 'для посетителей'
    },
    {
      title: 'Дополнительные услуги.',
      listItem: [
        'Витрины',
        'Торговое оборудование',
        'Грузоперевозки по всей России (из Москвы или области)'
      ],
      imgUrl: [
        '/members/1s.webp',
        '/members/2s.webp',
        '/members/3s.webp',
      ],
      alt: 'для участников'
    }
  ]
};
export default data;

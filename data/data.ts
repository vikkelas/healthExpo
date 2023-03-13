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

export interface DataFile {
  fromWhom: FormWhomItem[];
  thematicSection: ThematicSection[];
  pavilionInfo: PavilionInfo[];
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
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg1-min.webp',
    },
    {
      id:2,
      title: 'Медецинские и оздоровительные центры',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg2-min.webp',
    },
    {
      id:3,
      title: 'Медецинская косметика и средства гигиены',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg3-min.webp',
    },
    {
      id: 4,
      title: 'Восточная медицина и традиционный массаж',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg4-min.webp',
    },
    {
      id: 5,
      title: 'Натуральная аптека монастырей',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg5-min.webp',
    },
    {
      id: 6,
      title: 'Продукты для здорового питания',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg6-min.webp',
    },
    {
      id: 7,
      title: 'Технические средства для поддержания здорового образа жизни',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg7-min.webp',
    },
    {
      id: 8,
      title: 'Здоровье и красота без лекарств',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imgUrl: 'thematicimg8-min.webp',
    },
    {
      id: 9,
      title: 'Изделия из натуральных материалов',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
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
}
export default data;

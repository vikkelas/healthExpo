import style from '../styles/AbouUs.module.sass';
import Image from "next/image";
const AboutUs = () => {
    return (
        <main className={style.main}>
           <section className={style.mainTitle}>
                <div className={style.mainTitleBackground}>
                    <Image
                        src={'/images/298-min.webp'}
                        alt={'О компании'}
                        width={1920}
                        height={960}
                    />
                </div>
               <div className={style.mainTitleContainer}>
                   <div className={style.mainTitleContainerInfo}>
                       <h1>О компании «ЮрБрус»:</h1>
                       <div className={style.mainTitleContainerInfoText}>
                           <p>Выставочная компания  «ЮрБрус» -  начала свою деятельность в 2007 г. За более чем 15 лет работы компания проделала стремительный путь развития. Коллектив  приобрёл практический опыт организации выставочно-ярмарочных мероприятий, в том числе и международного уровня.</p>
                           <p>Мы успешно работали на таких известных площадках Москвы, как ВДНХ, Сокольнический выставочный центр, Тишинская площадь, Арбат и торговые центры.   </p>
                       </div>
                       <button>Наши выставки</button>
                   </div>
               </div>
           </section>
        </main>
    );
};

export default AboutUs;
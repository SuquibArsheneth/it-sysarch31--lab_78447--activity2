


import Card from "./Card";
 import ch1 from './assets/ch1.jpg'
 import ch2 from './assets/ch2.jpg'
 import ch3 from './assets/ch3.jpg'
 import ch4 from './assets/ch4.jpg'
  import ch5 from './assets/ch5.jpg'
  import ch6 from './assets/ch6.jpg'
 import ch7 from './assets/ch7.jpg'
 import ch8 from './assets/ch8.jpg'
import './index.css'

const characters = [
    {id: 10101010, name: "Lee Yoon Seo", image: ch1, role:"citizen"}, //c
    {id: 20202020, name: "Kim Jun Hee", image:ch2, role:"citizen"},//c
    {id: 30303030, name: "Oh Jung Won", image: ch3, role:"mafia"},//m
     {id: 40404040, name: "Go Kyung Jun", image: ch4, role:"mafia"},//m
    {id: 50505050, name: "Kim So Mi", image: ch5, role:"mafia"},//p
   {id: 60606060, name: "Jin Da Beom", image: ch6, role:"mafia"},//d
   {id: 70707070, name: "Kim Dong Hyun", image: ch7, role:"doctor"},
   {id: 80808080, name: "Ahn Na Hee", image: ch8, role:"police"},
  ];
export default function Character(){
        return(
            <div className="card-container">
                {characters.map(character => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        );
}
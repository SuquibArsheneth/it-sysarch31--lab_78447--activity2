/* eslint-disable react/prop-types */

// import "./index.css"
// export default function Card({ character}){

//        return(
//         <div className="card">
//                 <img className="card-image" alt="" src="https://i.mydramalist.com/1wd6r6_5s.jpg" width="200" height="200"/>
//             <h2>Lee Yoon Seo</h2>
//             <p> citizen</p>
//         </div>
//        )
// }


import "./index.css"
export default function Card({ character }){

       return(
        <div className="card">
                <img className="card-image" src={character.image} alt="" width="300" height="300"/>
            <h2 className="card-title">{character.name}</h2>
            <p className="card-text">{character.role}</p>
        </div>
       )
}
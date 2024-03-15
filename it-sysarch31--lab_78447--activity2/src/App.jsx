/* eslint-disable react/no-unknown-property */
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Card from './Card.jsx'
// function App (){


 

//   return (
//     <>
//       <Header />
//       <Card alt=""src="https://i.mydramalist.com/1wd6r6_5s.jpg" /> 
//       <Card  src="https://i.mydramalist.com/Xd4KYx_5s.jpg"/>
//       <Card />
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Footer />
//     </>
//   );
// }
// export default App


  
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Night from "./Night.jsx"

function App() {
  return(
    <div className="app-container">
      <Header />
      <div className="content">
       
        <Night/>
        
      </div>
    
      <Footer />
    </div>
  );

  
}

export default App











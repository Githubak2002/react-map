
import React from 'react'
// import { arr } from "../constants";

// function fun(props)
const Cards = (props) => (
    <div className=' flex justify-center'>

    <div className='border-2 border-black m-2 rounded-xl bg-pink-200 w-[300px] h flex-col flex items-center py-4'>
        
        <div className='flex items-center'>
        <img className='rounded-[20px] h-[160px] w-auto' src={props.img} alt="img" />
        </div>
        <h2 className='font-bold font-mono'>Id - {props.id}</h2>
        <h1 className=' font-mono font-bold '>Name - {props.name}</h1>
        
    </div>

    </div>
)
export default Cards





// import React from "react";
// import Card from "./Card";
// import contacts from "../contacts";

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <Card
//         name={contacts[0].name}
//         img={contacts[0].imgURL}
//         tel={contacts[0].phone}
//         email={contacts[0].email}
//       />
//       <Card
//         name={contacts[1].name}
//         img={contacts[1].imgURL}
//         tel={contacts[1].phone}
//         email={contacts[1].email}
//       />
//       <Card
//         name={contacts[2].name}
//         img={contacts[2].imgURL}
//         tel={contacts[2].phone}
//         email={contacts[2].email}
//       />
//     </div>
//   );
// }

// export default App;


// ============== CARDS =============

// import React from "react";

// function Card(props) {
//   return (
//     <div className="card">
//       <div className="top">
//         <h2 className="name">{props.name}</h2>
//         <img className="circle-img" src={props.img} alt="avatar_img" />
//       </div>
//       <div className="bottom">
//         <p className="info">{props.tel}</p>
//         <p className="info">{props.email}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

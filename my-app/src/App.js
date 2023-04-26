// /*eslint-disable*/
// import React, { useEffect, useState } from 'react';
// import './App.css'
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as icon from '@fortawesome/free-solid-svg-icons'
// import ChatBot from 'react-simple-chatbot';




// const App = () => {

//   const [eye, seteye] = useState("show")
//   const [string, setsring] = useState(["Love", "Joy", "Peace", "Hope", "Kindness", "Generosity", "Gratitude", "Empathy", "Compassion", "Courage", "Honesty", "Integrity", "Authenticity", "Respect", "Humility", "Patience", "Perseverance", "Diligence", "Creativity", "Curiosity", "Wisdom", "Knowledge", "Understanding", "Acceptance", "Forgiveness", "Friendship", "Trust", "Loyalty", "Encouragement", "Inspiration", "Enthusiasm", "Optimism", "Confidence", "Success", "Abundance", "Health", "Vitality", "Beauty", "Grace", "Bliss", "Freedom", "Justice", "Harmony", "Unity", "Diversity", "Excellence", "Innovation", "Prosperity", "Serenity", "Tranquility", "Hate", "Anger", "Violence", "Envy", "Greed", "Jealousy", "Revenge", "Betrayal", "Deception", "Manipulation", "Lies", "Dishonesty", "Injustice", "Arrogance", "Pride", "Stubbornness", "Impatience", "Laziness", "Procrastination", "Negativity", "Pessimism", "Doubt", "Fear", "Worry", "Anxiety", "Depression", "Despair", "Grief", "Sorrow", "Pain", "Misery", "Loneliness", "Isolation", "Rejection", "Failure", "Defeat", "Loss", "Poverty", "Illness", "Sickness", "Disease", "Addiction", "Temptation", "Indulgence", "Immorality", "Ignorance", "Stagnation", "Confusion", "Chaos", "Destruction"])
//   const [number, setnumber] = useState()


//   const generateRandom = (maxLimit = 10) => {
//     let g = Math.floor(Math.random() * 100);
//     console.log(string[g])
//     return (string[g])
//   }

//   const steps = [
//     {
//       id: 'intro',
//       message: 'Do you know about your nature',
//       trigger: 'intro-user',
//     },
//     {
//       id: 'intro-user',
//       options: [
//         { value: 'y', label: 'Yes', trigger: 'yes-response' },
//         { value: 'n', label: 'No', trigger: 'no-response' },
//       ]

//     },
//     {
//       id: 'yes-response',
//       message: generateRandom,
//       trigger: 'intro-user',
//     },
//     {
//       id: 'no-response',
//       message: "poda",
//       trigger: 'intro',
//     },
//   ];



//   return (

//     <div >

//       <div class="fixed-bottom" >
//         <div class="float-end me-5 mb-5">

//           <div class="collapse" id="collapseWidthExample">
//             <div>
//               <ChatBot steps={steps} />
//             </div>
//           </div>

//           <a class="float-end" data-bs-toggle="collapse" href="#collapseWidthExample" role="button" aria-expanded="false" aria-controls="#collapseWidthExample">

//             {eye == "show" && <img src="https://www.freeiconspng.com/thumbs/cool-icon/cool-icon-15.png" alt="ima" className='rounded pilles' onClick={() => seteye("hide")} style={{ width: "50px", height: "50px" }} />}
//             {eye == "hide" && <img src="https://freepngimg.com/download/light/63298-and-fire-light-effect-water-cool.png" alt="ima" className='rounded pilles' onClick={() => seteye("show")} style={{ width: "50px", height: "50px" }} />}

//           </a>
//         </div>
//       </div>

//       <div className="container">
//         <div className="bg-light p-3" id='l' >
//           <nav class="navbar navbar-light bg-light justify-content-between fixed-top">
//             <a class="navbar-brand ms-5"><h1>Navbar</h1></a>
//             <form class="form-inline me-5">
//               <ul class="nav nav-pills">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="#l">Active</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                   <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//                   <ul class="dropdown-menu">
//                     <li ><a class="dropdown-item" href="#l">Action</a></li>
//                     <li><a class="dropdown-item" href="#p">Another action</a></li>
//                     <li><a class="dropdown-item" href="#n">Something else here</a></li>
//                     <li><hr class="dropdown-divider" /></li>
//                     <li><a class="dropdown-item" href="#">Separated link</a></li>
//                   </ul>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#p">Link</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link disabled">Disabled</a>
//                 </li>
//               </ul>
//             </form>
//           </nav>
//         </div>

//         <div className="lenght">
//           <marquee behavior="" direction="">
//             <img className='style' src="https://media.istockphoto.com/id/1198271727/photo/abstract-wavy-object.jpg?b=1&s=612x612&w=0&k=20&c=DRo7iL53SSQPoEPoA84CXSIeDCUwqYl7wr2EoaddmHI=" alt="" />
//             <img className='style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXEC4SvV8bkkY0a6v9LhHkDbFALTyLD6m_3i68Zxo6wALY1z1DluV_7Zi_6ODJdL-l4s&usqp=CAU" alt="" />
//             <img className='style' src="https://media.istockphoto.com/id/1198271727/photo/abstract-wavy-object.jpg?b=1&s=612x612&w=0&k=20&c=DRo7iL53SSQPoEPoA84CXSIeDCUwqYl7wr2EoaddmHI=" alt="" />
//             <img className='style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXEC4SvV8bkkY0a6v9LhHkDbFALTyLD6m_3i68Zxo6wALY1z1DluV_7Zi_6ODJdL-l4s&usqp=CAU" alt="" />
//             <img className='style' src="https://media.istockphoto.com/id/1198271727/photo/abstract-wavy-object.jpg?b=1&s=612x612&w=0&k=20&c=DRo7iL53SSQPoEPoA84CXSIeDCUwqYl7wr2EoaddmHI=" alt="" />
//             <img className='style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXEC4SvV8bkkY0a6v9LhHkDbFALTyLD6m_3i68Zxo6wALY1z1DluV_7Zi_6ODJdL-l4s&usqp=CAU" alt="" />
//           </marquee>
//         </div>



//         <div id="carouselExampleIndicators" class="carousel slide">
//           <div class="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//           </div>
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img class="d-block w-100" src="https://media.istockphoto.com/id/1357709448/photo/gold-colored-disco-ball-baubles.jpg?s=2048x2048&w=is&k=20&c=7_nybye6FxymSnTubF7GrMMNJw17cAn9X6wymwWV7DI=" style={{ height: "500px", width: "500px" }} alt="First slide" />
//             </div>
//             <div class="carousel-item">
//               <img class="d-block w-100" src="https://media.istockphoto.com/id/1347756992/photo/crowded-concert-venue.jpg?s=2048x2048&w=is&k=20&c=rLNTNZ7A0P9dExU2dSC06dWFTynCwl4Sj_V-enFqbAs=" style={{ height: "500px", width: "500px" }} alt="Second slide" />
//             </div>
//             <div class="carousel-item">
//               <img class="d-block w-100" src="https://media.istockphoto.com/id/1125652935/photo/friends-dancing-in-a-silent-disco.jpg?s=2048x2048&w=is&k=20&c=7TOwvey52hnj7wekHFdRQkxSLqvrG_xwhuCID1Qb3XM=" alt="Second slide" style={{ height: "500px", width: "500px" }} />
//             </div>
//           </div>
//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>

//         <div class="text-center">
//           <div class="row row-cols-1 row-cols-md-3 ">
//             <div class="col-sm-4">
//               <div class="col card m-5 bg-dark text-light" style={{ width: "300px" }} >
//                 <div class="card-body">
//                   <h3> rating.</h3>
//                   <h1 className='text-center text-info'>4.5</h1>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-4">
//               <div class="col card m-5 bg-dark text-light" style={{ width: "300px" }}>
//                 <div class="card-body">
//                   <h3> found in.</h3>
//                   <h1 className='text-center text-info'>2000</h1>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-4">
//               <div class="col card m-5 bg-dark text-light" style={{ width: "300px" }}>
//                 <div class="card-body">
//                   <h3> coustomers.</h3>
//                   <h1 className='text-center text-info'>10000+</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="text-white bg-dark">
//           <div className='row text-center' style={{ fontFamily: "sans-serif" }}>
//             <div className='card bg-dark col-sm-4 p-3'>
//               <div class="card-header">
//                 <h2> <u>Address</u></h2>
//               </div>
//               <div class="card-body">
//                 <h5>Mr John Smith132, My Street, </h5>
//                 <h5> Bigtown BG23 4YZEngland</h5>
//               </div>
//             </div>


//             <div className=' card bg-dark col-sm-4 p-3'>
//               <div class="card-header">
//                 <h2> <u>Working hours</u></h2>
//               </div>
//               <div class="card-body">
//                 <h5>Mr John Smith132, My Street, </h5>
//                 <h5> Bigtown BG23 4YZEngland</h5>
//               </div>
//             </div>

//             <div className=' card bg-dark col-sm-4 p-3'>
//               <div class="card-header">
//                 <h2> <u>Contact</u></h2>
//               </div>
//               <div class="card-body">
//                 <div className="">
//                   <h5>email :<span>hfhdfj@gmail.com</span></h5>
//                 </div>
//                 <div className="">
//                   <h5>ph-no: <span>123456987454</span></h5>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//         {/* ============================================================================================================================== */}


//         <div id='p' className='container' >

//           <div className="d-flex" style={{ height: "500px" }}>
//             <div className='col bg-info  rounded bg-opacity-75 h-100 '>

//             </div>
//             <div className='col bg-success  rounded bg-opacity-75 h-100 '>

//             </div>
//             <div className='col bg-warning rounded bg-opacity-75 h-100'>

//             </div>
//           </div>

          

//         </div>




//         <div id='n' className='' style={{ height: "100%", width: "100%", backgroundColor: "rgb(228,218,248)", marginTop: "0%" }}>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eos porro optio animi aliquid, nulla inventore in accusamus commodi praesentium repudiandae maxime labore blanditiis minus natus cum neque. Ipsa, commodi? Nam quas sunt facere autem deserunt eveniet error minus enim, quia ullam nostrum nemo, voluptate nulla eaque quos consequatur. Repellat tenetur quidem, minima laudantium nihil, eius aspernatur beatae aut corrupti non modi repudiandae facilis! Fugit illum autem veritatis! Nisi sapiente quasi dolores! Recusandae natus doloremque voluptatibus pariatur soluta! Nulla accusamus amet, aspernatur nihil minima obcaecati officia ipsum doloremque velit distinctio a dolorum cupiditate aut aperiam, rerum non quo, cumque suscipit! Provident aut magni cum dolores sapiente eaque magnam tenetur pariatur atque minus? Officia optio vitae, esse nulla delectus eius perspiciatis quisquam, ex non magnam excepturi blanditiis impedit id consectetur. Dicta libero sint quibusdam sunt necessitatibus. Fuga incidunt officiis cum quos cumque pariatur sed odit harum ipsa voluptatibus, id laborum illum debitis excepturi libero sunt minima iste non culpa saepe. Vero laborum accusantium reprehenderit iure voluptas blanditiis tempore nihil porro esse quae numquam repellendus vitae molestiae magni, modi cum sunt vel eaque quod illo harum odio! Ipsam voluptatibus consequuntur saepe repellat deserunt architecto libero ad, eos quas esse maiores dolorem sint, distinctio quod minima ipsa doloribus quis officia. Sapiente, tenetur soluta officia dolor ducimus incidunt voluptate laborum doloribus voluptas voluptates alias, fugit itaque atque! Quibusdam illum possimus facilis, ea rem eveniet laudantium cum veniam repellendus qui illo vitae suscipit consequatur architecto labore excepturi harum. Tempora labore exercitationem officiis dolor odit voluptatem eveniet omnis cum error recusandae magnam facilis consequatur inventore rerum cumque sed officia dolorem deserunt doloremque temporibus possimus, et commodi nostrum? Earum cupiditate dignissimos perferendis, maxime assumenda unde laboriosam voluptatum natus tempora magnam, consequatur, repudiandae soluta architecto laudantium ex dolor in temporibus. Necessitatibus deserunt odio dolore voluptas eos voluptate repellendus libero omnis quibusdam tempora! Quo ullam sequi autem maxime porro asperiores adipisci, fugit consectetur vel sunt debitis temporibus molestias quia saepe possimus expedita. Earum maxime voluptatibus maiores, necessitatibus in expedita officia. Soluta accusantium magni, ut sunt perspiciatis magnam est! Officiis expedita hic error tempora optio distinctio, impedit eligendi! Quae officia velit nihil doloremque, blanditiis id ad adipisci aspernatur nam fugiat veritatis ab. Nobis eaque error laborum repellat modi tempore esse nam repellendus ut temporibus illo odit, cumque eveniet! Quisquam deleniti ipsam eum amet, iusto, odit nisi aut dolore expedita provident, porro culpa minus reiciendis temporibus. Magni architecto repellat laudantium doloribus dolore a? Soluta quis voluptatum tempore distinctio deleniti voluptates est ea nihil aut laboriosam nemo, aliquam, similique, nobis pariatur nisi quaerat laudantium. Similique fugit voluptates, libero laudantium aliquid non aperiam reiciendis velit exercitationem eligendi quasi provident sunt soluta, quia error ad dolorem hic quidem minima dolor ut quo repellat. Vitae quibusdam praesentium nulla nisi, accusamus magnam officia sit, doloremque quas, iste facilis recusandae provident deserunt molestiae rerum voluptatum sequi impedit doloribus at eveniet! Beatae iusto provident vitae sunt ex quis error repudiandae, voluptatibus aliquid quaerat fugiat mollitia repellendus, sequi, cupiditate fugit dolore enim aperiam nobis voluptatum quam amet ea sed perspiciatis. Quos, unde et dolore dolor saepe cum eveniet repellendus! At cum voluptas, voluptatem quos perferendis quae maiores numquam delectus impedit dolor alias quaerat voluptatum dicta ipsum excepturi incidunt non quas repellendus eveniet, dolorum aut quo culpa debitis? Necessitatibus quasi dolorum nemo? Nam id aspernatur facere sed odio. Tempora, voluptatem adipisci. Impedit quis earum voluptate debitis laudantium suscipit, cumque deleniti saepe quisquam similique blanditiis unde quam, culpa natus inventore odit non mollitia iure doloremque deserunt rerum nam harum sunt. Voluptatum quod odit incidunt? Inventore dolores cum, quasi aut, assumenda aspernatur possimus dignissimos doloribus hic, vero quos error. Possimus sapiente minus similique illo harum suscipit iste nobis. Quasi distinctio, aperiam quo sapiente magnam laudantium. Ducimus minima quaerat vero ut omnis. Voluptatem debitis dolore quaerat sequi ullam quas commodi necessitatibus. Deleniti hic odio asperiores dignissimos ullam accusamus explicabo, quae provident dolore adipisci tempore aperiam, non minima aut placeat quia labore fugiat ipsa fugit itaque quam ducimus, error praesentium debitis? Odio, vel. Dicta consequatur ut et labore vitae reiciendis mollitia similique libero atque quibusdam sunt in perspiciatis doloribus minima, dignissimos ea sed, sint perferendis asperiores. Optio cupiditate esse nulla ducimus ea vel ad, consectetur, perferendis alias quo et obcaecati commodi aspernatur hic aperiam! Error fugiat ut quae numquam illo, similique voluptatum ad amet odio autem laudantium provident beatae architecto repellendus eligendi fugit veniam quibusdam cupiditate ea nobis perferendis labore assumenda exercitationem. Ipsa voluptatum magni, consequatur explicabo ullam iure provident vel quo velit quibusdam debitis. Magnam voluptatem error voluptate atque blanditiis ducimus mollitia ipsum dignissimos iure quas porro omnis pariatur optio, totam, fugit fugiat laboriosam nobis dolore! Omnis voluptates sed fugiat vitae quaerat minus magni doloremque corrupti, cumque voluptatibus, maiores quos illum aliquam optio architecto iusto delectus, possimus magnam temporibus eos error harum et obcaecati. Ipsa recusandae eius nobis molestiae aliquam odit ad minima sit repellendus cum. Nobis eos soluta rem minus tenetur temporibus molestias inventore earum voluptatibus harum maiores at sit ducimus odit beatae possimus, impedit aliquam asperiores assumenda cupiditate ipsa rerum quod ea illum? Iure inventore saepe, consectetur, officia at veniam provident rem soluta aperiam aspernatur atque pariatur consequuntur quis nemo. Temporibus recusandae neque sed numquam aperiam, enim facilis cumque, tempora ipsam similique culpa impedit obcaecati vitae distinctio corporis veniam asperiores odio! Odio deleniti nihil magni, laborum eius perferendis quisquam adipisci vel illum magnam modi dicta, quo et exercitationem obcaecati numquam. Voluptatibus quas provident fugit! Omnis aliquam quis magnam blanditiis esse cupiditate modi culpa repellendus quidem possimus, vitae quam laboriosam explicabo in sit accusantium excepturi dolores rerum ut ipsa repudiandae sapiente iusto! Soluta eveniet fugit quo corrupti, rerum excepturi distinctio. Cupiditate saepe illum perferendis velit quae culpa, nobis libero aut mollitia quas eius magni tempore sequi error architecto, dolore odit neque fugit nisi hic nulla voluptas suscipit? In ad dicta facilis. Ex adipisci ducimus corrupti repellat reiciendis repellendus consectetur amet nisi, odit reprehenderit cum, sequi molestias nemo distinctio quod mollitia praesentium quo atque suscipit! Porro aperiam alias distinctio, culpa delectus molestiae officia incidunt, nam esse est officiis sed inventore accusantium consequatur at.
//         </div>

//       </div>


//     </div>
//   );
// }





// export default App;


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import ChatBot from 'react-simple-chatbot';
import Navbar from './components/navbar';
import First from './components/first';
import Second from './components/second';
import Three from './components/three';
import Datapage from './components/datapage';


function App() {
  return (
    <div className='container-fluid'>
      <div className="fixed-top">
        <Navbar />
      </div>

      <div className="">
        <First />
      </div>
      <div className="mt-5">
        < Three/>
      </div>
      <div className="mt-5">
        < Datapage/>
      </div>
      <div className="mt-5">
        < Second/>
      </div>
      
      
    </div>
  )
}

export default App

// import logo from './logo.svg';
import './App.css';
import CustomGallery from './CustomGallery';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function Greeter(){
  return <h1>Hello, World!</h1>;
}


export default function App(){
  return (
  <>
    <Greeter />
    <CustomGallery imgs = {[
                      {src:"https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png", alt:"Pic1"},
                      {src:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1fndzcd_41017374.jpeg?region=0,0,600,600", alt:"Pic2"},
                      {src:"https://static1.squarespace.com/static/5ac589eb8ab722aa77be2eeb/5b479b056d2a73336ed80ffe/5b50d290562fa7d2dabe2955/1532023444871/random_interactive_share.jpg"},
                    ]} />
  </>);
}



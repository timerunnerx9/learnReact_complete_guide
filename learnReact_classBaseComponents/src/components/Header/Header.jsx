<<<<<<< HEAD
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactImg from "../../assets/react-core-concepts.png";


import "./Header.css";
=======
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
>>>>>>> c7d656b72d7b95015ab9eddbe873ab224f718acb

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
<<<<<<< HEAD
    const description = reactDescriptions[genRandomInt(2)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
=======
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
>>>>>>> c7d656b72d7b95015ab9eddbe873ab224f718acb

import './App.css';
import NavBar from './NavBar';


let headerLinks = [
  'Home',
  'About',
  'Contact',
]


let footerLinks = [
  'Home',
  'About',
  'Contact',
  'FAQs',
  'Subscribe',
  'Terms & Conditions'
]



function App() {
  return (
    <div className="App">

      <NavBar links={headerLinks} theme="light" />
      <NavBar links={footerLinks} theme="dark" />

    </div>
  );
}

export default App;


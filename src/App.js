import './App.css';
import NavBar from './NavBar';
import Card from './Card';

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

  const carouselStyle1 = {
    "width": "100%",
    "height": "350px",
    "background-position": "center",
    "background-size": "cover",
    "background-image": "url('./szr.jpeg')"
  }
  const carouselStyle2 = {
    "width": "100%",
    "height": "350px",
    "background-position": "center",
    "background-size": "cover",
    "background-image": "url('./sunset-dubai.jpeg')"
  }
  const carouselStyle3 = {
    "width": "100%",
    "height": "350px",
    "background-position": "center",
    "background-size": "cover",
    "background-image": "url('./burj-al-arab.jpeg')"
  }

  return (
    <div className="App">

      <NavBar links={headerLinks} theme="light" />

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={carouselStyle1} className="carousel-image carousel1"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyle2} className="carousel-image carousel2"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyle3} className="carousel-image carousel3"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div 
      id="card-section"
      className="d-flex my-4 justify-content-between"
      style={{minHeight: 'calc(100vh - 462px)'}}>

        <div class="container">
          <div class="row">
            <div class="col">
              <Card 
                imageUrl="./sunset-dubai.jpeg" 
                title="Sunset in Dubai" 
                description="Visit the emirate of Dubai..." 
                buttonLabel="Learn more"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl="./szr.jpeg" 
                title="Sheik Zayed Road" 
                description="See the great skyline of Dubai..." 
                buttonLabel="Learn more"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl="./burj-al-arab.jpeg" 
                title="Burj Al Arab" 
                description="Visit the only 7 star hotel..." 
                buttonLabel="Learn more"
              />
            </div>
          </div>
        </div>

      </div>

      <NavBar links={footerLinks} theme="dark" />

    </div>
  );
}

export default App;



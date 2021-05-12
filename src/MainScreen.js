import React from 'react';
import './App.css';
import Card from './Card';
import Carousel from './Carousel';


function MainScreen() {

  return (
    <div>
      <Carousel />

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
    </div>
  );
}

export default MainScreen;



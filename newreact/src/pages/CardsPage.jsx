import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";
import {Search} from "../components/Search";

function Cards(props) {

  const [photosState, setPhotosState] = useState([]);

  async function getPhotos() {
    const photos = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
    const data = await photos.json();
    setPhotosState(data);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="container">
    <h1>Cards Page Go <Link to="/">Home</Link></h1>
    <Search/>
    <div className="cardsWrapper">
      {photosState.map((photo) =>
        <Photo photo={photo} key={photo.id} />
      )}
    </div>
    </div>
  )
}

export default Cards;
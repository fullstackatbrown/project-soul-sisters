"use client";
import { useState } from 'react';
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import styles from "./gallery.module.css";

export default function Gallery() {
  const [photos, setPhotos] = useState(["https://media.istockphoto.com/id/175397603/photo/frog.jpg?s=612x612&w=0&k=20&c=EMXlwg5SicJllr7gnSFUUjzwCGa1ciLjYD1bk8NvO2E=", "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg"]);
    return (

      <div className="flex flex-wrap">{photos.map((x, i) =>
        <GalleryPhoto url={x} /> 
        )}</div>
    );
  }

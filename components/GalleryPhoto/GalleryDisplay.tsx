"use client";
import { useState } from 'react';
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import styles from "./gallery.module.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

// padding, center, prob 3 columns

export default function GalleryDisplay(props: { urls: { media: any[]; }; }) {
  const [photos, setPhotos] = useState([
    {
      "caption": "a placeholder image to display for you, does the text wrap around like it's supposed to?", 
      "url": "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    }, 
    {
      "caption": "a vertical frog",
      "url": "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg"
    }, 
    {
      "caption": "a frog", 
      "url": "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg"
    }
    ]);

    return (
      <div>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1100: 3, 1400: 4}}
            >
                <Masonry gutter="5px">
                    {props.urls.media.map((x, i) =>
        <GalleryPhoto url={x.url} /*caption={x.caption}*/ key={x.name} caption={undefined}/> 
        )}
                </Masonry>
            </ResponsiveMasonry>

      
      </div>
    );
  }

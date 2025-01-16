"use client";
import GalleryPhoto from "./GalleryPhoto";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

export default function GalleryDisplay(props: { 
  urls: { 
    media: { 
      imgix_url: string, 
      name: string, 
      alt_text: string | undefined, 
      width: number, 
      height: number 
    }[]; 
  }; 
}) {
  const [visiblePhotos, setVisiblePhotos] = useState(8);

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => prev + 8);
  };

  const visibleMedia = props.urls.media.slice(0, visiblePhotos);

  const allPhotosLoaded = visiblePhotos >= props.urls.media.length;

  return (
    <div style={{ margin: "20px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 700: 1, 1400: 2 }}>
        <Masonry gutter="1px">
          {visibleMedia.map((x) => (
            <GalleryPhoto 
              url={`${x.imgix_url}?q=40&auto=format,compress`} 
              key={x.name} 
              caption={x.alt_text} 
              width={x.width} 
              height={x.height} 
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Centered Button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button 
          onClick={loadMorePhotos} 
          className="" 
          disabled={allPhotosLoaded} // Disable button when all photos are loaded
        >
          {allPhotosLoaded ? "No More Photos" : "Load More"}
        </button>
      </div>
    </div>
  );
}
"use client";
import GalleryPhoto from "./GalleryPhoto";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// padding, center, prob 3 columns

export default function GalleryDisplay(props: { urls: { media: any[]; }; }) {
  return (
    <div style={{ margin: "20px", marginLeft: "0px" }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 700: 1, 1400: 2 }}
      >
        <Masonry gutter="20px">
          {props.urls.media.map((x, i) =>
            <GalleryPhoto url={x.url} key={x.name} caption={x.alt_text} width={x.width} height={x.height} />
          )}
        </Masonry>
      </ResponsiveMasonry>


    </div>
  );
}

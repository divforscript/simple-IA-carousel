import { useState } from "react";
import img1 from "../../../../asset-template/images/image-product-1.jpg";
import img2 from "../../../../asset-template/images/image-product-2.jpg";
import img3 from "../../../../asset-template/images/image-product-3.jpg";
import img4 from "../../../../asset-template/images/image-product-4.jpg";

const images = [
  { src: img1, alt: "Product view 1" },
  { src: img2, alt: "Product view 2" },
  { src: img3, alt: "Product view 3" },
  { src: img4, alt: "Product view 4" },

];

export default function Main() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrent((prev) => Math.min(prev + 1, images.length - 1));

  return (
    <section
      id="product-carousel"
      className="flex flex-col items-center justify-center w-full max-w-md mx-auto py-4"
      aria-label="Product image carousel"
    >
      <div className="relative w-full aspect-square bg-amber-200 flex items-center justify-center">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="object-contain w-full h-full rounded-lg"
        />
        {/* Prev Button */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Previous product image"
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow transition hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          &#8592;
        </button>
        {/* Next Button */}
        <button
          onClick={goNext}
          disabled={current === images.length - 1}
          aria-label="Next product image"
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow transition hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          &#8594;
        </button>
      </div>



      <div className="mt-2 flex gap-2">
        {images.map((img, idx) => (
          <button
            key={img.alt}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-orange-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}







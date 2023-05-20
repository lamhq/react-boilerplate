import { useEffect, useRef } from 'react';

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: '200px 200px 200px',
  gap: '10px',
  justifyContent: 'center',
};
const itemStyle = {
  width: '200px',
  height: '200px',
  backgroundColor: 'gray',
};

function ImageGallery({ images }: { images: string[] }) {
  // the ref that hold a list of img elements
  const refs = useRef<HTMLImageElement[]>([]);
  function setRef(ref: HTMLImageElement | null, index: number) {
    if (ref) {
      refs.current[index] = ref;
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          // load the image if it's within 100px from the viewport
          if (entry.isIntersecting) {
            const { target } = entry;

            // use a custom attribute to store the real image source
            const src = target.getAttribute('data-src') || '';
            target.setAttribute('src', src);

            // unobserve the element because image is loaded
            obs.unobserve(target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    refs.current.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div style={containerStyles}>
      {images.map((image, index) => (
        <img
          src=""
          data-src={image}
          ref={(ref) => setRef(ref, index)}
          key={image}
          style={itemStyle}
          alt=""
        />
      ))}
    </div>
  );
}

export function LazyLoadImageDemo() {
  const images = [
    'https://picsum.photos/id/1/200/200',
    'https://picsum.photos/id/2/200/200',
    'https://picsum.photos/id/3/200/200',
    'https://picsum.photos/id/4/200/200',
    'https://picsum.photos/id/5/200/200',
    'https://picsum.photos/id/6/200/200',
    'https://picsum.photos/id/7/200/200',
    'https://picsum.photos/id/8/200/200',
    'https://picsum.photos/id/9/200/200',
    'https://picsum.photos/id/10/200/200',
    'https://picsum.photos/id/11/200/200',
    'https://picsum.photos/id/12/200/200',
    'https://picsum.photos/id/13/200/200',
    'https://picsum.photos/id/14/200/200',
    'https://picsum.photos/id/15/200/200',
    'https://picsum.photos/id/16/200/200',
    'https://picsum.photos/id/17/200/200',
    'https://picsum.photos/id/18/200/200',
    'https://picsum.photos/id/19/200/200',
    'https://picsum.photos/id/20/200/200',
  ];
  return <ImageGallery images={images} />;
}

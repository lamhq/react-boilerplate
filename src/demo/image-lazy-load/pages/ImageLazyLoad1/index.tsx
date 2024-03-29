import { useCallback, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Img from '../../atoms/Img';

/**
 * React Hook to trigger image load on scroll
 */
function useIntersectionObserver(images: HTMLImageElement[]) {
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
      { rootMargin: '100px' },
    );

    images.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [images]);
}

/**
 * Component that display image list
 */
function ImageGallery({ images }: { images: string[] }) {
  // the ref that hold a list of img elements
  const refs = useRef<HTMLImageElement[]>([]);

  // function to init ref value at runtime
  const setRef = useCallback((ref: HTMLImageElement | null, index: number) => {
    if (ref) {
      refs.current[index] = ref;
    }
  }, []);

  useIntersectionObserver(refs.current);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      {images.map((image, index) => (
        <Img key={image} data-src={image} src="" ref={(ref) => setRef(ref, index)} alt="" />
      ))}
    </Box>
  );
}

export default function ImageLazyLoad1() {
  const images = [
    'https://picsum.photos/id/1/300/300',
    'https://picsum.photos/id/2/300/300',
    'https://picsum.photos/id/3/300/300',
    'https://picsum.photos/id/4/300/300',
    'https://picsum.photos/id/5/300/300',
    'https://picsum.photos/id/6/300/300',
    'https://picsum.photos/id/7/300/300',
    'https://picsum.photos/id/8/300/300',
    'https://picsum.photos/id/9/300/300',
    'https://picsum.photos/id/10/300/300',
    'https://picsum.photos/id/11/300/300',
    'https://picsum.photos/id/12/300/300',
    'https://picsum.photos/id/13/300/300',
    'https://picsum.photos/id/14/300/300',
    'https://picsum.photos/id/15/300/300',
    'https://picsum.photos/id/16/300/300',
    'https://picsum.photos/id/17/300/300',
    'https://picsum.photos/id/18/300/300',
    'https://picsum.photos/id/19/300/300',
    'https://picsum.photos/id/20/300/300',
  ];
  return (
    <>
      <p>Lazy load image demo:</p>
      <ul>
        <li>
          Lazy load images if they are within <strong>100px</strong> from the viewport.
        </li>
        <li>
          Position checking is performed using <code>IntersectionObserver</code> API
        </li>
        <li>Unloaded images will be displayed as rectangle with gray background</li>
        <li>
          Images are lazy loaded by rendering an <code>img</code> tag with no <code>src</code>&nbsp;
          attribute. Then the value will be updated with the real image url (stored in&nbsp;
          <code>data-src</code> attribute)
        </li>
        <li>
          To prevent the surrounding content from reflowing when a lazy-loaded image is downloaded,
          <code>width</code> and <code>height</code> of <code>&lt;img&gt;</code> element are set
        </li>
      </ul>

      <p>Scroll down to see how it works:</p>

      <ImageGallery images={images} />
    </>
  );
}

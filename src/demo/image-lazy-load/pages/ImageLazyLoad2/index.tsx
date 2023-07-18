import Box from '@mui/material/Box';
import Img from '../../atoms/Img';

function ImageGallery({ images }: { images: string[] }) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', mt: 50 }}
    >
      {images.map((image) => (
        <Img key={image} src={image} loading="lazy" alt="" />
      ))}
    </Box>
  );
}

export default function ImageLazyLoad2() {
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
          Lazy load images using the <code>loading</code> attribute of <code>img</code> html tag
          (native)
        </li>
        <li>Unloaded images will be displayed as rectangle with gray background</li>
        <li>
          To prevent the surrounding content from reflowing when a lazy-loaded image is
          downloaded,&nbsp;
          <code>width</code> and <code>height</code> of <code>&lt;img&gt;</code> element are set
        </li>
      </ul>
      <p>Scroll down to see how it works:</p>
      <ImageGallery images={images} />
    </>
  );
}

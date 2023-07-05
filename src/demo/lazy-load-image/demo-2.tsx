import classes from './styles.module.css';

function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className={classes.container}>
      {images.map((image) => (
        <img key={image} className={classes.item} src={image} loading="lazy" alt="" />
      ))}
    </div>
  );
}

export function LazyLoadImageDemo2() {
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
        <li>Lazy load images using the `loading` attribute of `img` html tag (native)</li>
        <li>Unloaded images will be displayed as rectangle with gray background</li>
        <li>
          To prevent the surrounding content from reflowing when a lazy-loaded image is downloaded,
          `width` and `height` of `&lt;img&gt;` element are set (in css)
        </li>
      </ul>
      <p>Scroll down to see how it works</p>
      <ImageGallery images={images} />;
    </>
  );
}

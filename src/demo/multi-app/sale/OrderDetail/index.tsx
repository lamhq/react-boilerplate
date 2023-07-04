import { useParams } from 'react-router-dom';

export function OrderDetail() {
  const { id } = useParams();
  return <p>order detail {id}</p>;
}

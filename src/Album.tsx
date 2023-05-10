import { apiService } from './common/services';
import { suspense } from './common/suspense';

export default function Albums() {
  const data = suspense(apiService.getAlbum('abcd'));
  return (<p>{data}</p>);
}

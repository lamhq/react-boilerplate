import { apiService } from './common/services';
import { suspense } from './common/suspense';

export default function Profile() {
  const data = suspense(apiService.getProfile());
  return (<p>{data}</p>);
}

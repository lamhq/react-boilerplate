import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountInfo } from '../AccountInfo';
import { AccountEdit } from '../AccountEdit';

export function CustomerModule() {
  return (
    <Routes>
      <Route index element={<Navigate to="account" replace />} />
      <Route path="account" element={<AccountInfo />} />
      <Route path="account/edit" element={<AccountEdit />} />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

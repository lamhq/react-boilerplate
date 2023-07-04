import { Routes, Route, Navigate } from 'react-router-dom';
import { OrderHistory } from '../OrderHistory';
import { OrderDetail } from '../OrderDetail';

export function SaleModule() {
  return (
    <Routes>
      <Route index element={<Navigate to="orders" replace />} />
      <Route path="orders" element={<OrderHistory />} />
      <Route path="orders/:id" element={<OrderDetail />} />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

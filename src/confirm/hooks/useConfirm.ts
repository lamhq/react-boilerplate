import { useContext } from 'react';
import ConfirmContext from '../contexts/ConfirmContext';

export default function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('ConfirmProvider is missing in component tree');
  }
  return context;
}

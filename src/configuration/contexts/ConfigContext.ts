import { createContext } from 'react';
import config from '@/config';

export default createContext<typeof config | undefined>(undefined);

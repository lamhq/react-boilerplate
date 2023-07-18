import { createContext } from 'react';
import config from 'src/config';

export default createContext<typeof config | undefined>(undefined);

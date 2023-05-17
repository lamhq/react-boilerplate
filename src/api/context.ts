import { createContext } from 'react';
import { ApiService } from './ApiService';

export const ApiContext = createContext<ApiService | null>(null);

import { createContext } from 'react';
import { IServices } from './types';

export const ServiceContext = createContext<IServices | null>(null);

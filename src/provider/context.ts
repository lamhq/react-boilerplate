import { createContext } from 'react';
import { IServices } from './service';

export const ServiceContext = createContext<IServices | null>(null);

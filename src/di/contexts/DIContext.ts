import { createContext } from 'react';
import { DependencyContainer } from 'tsyringe';

export default createContext<DependencyContainer | null>(null);

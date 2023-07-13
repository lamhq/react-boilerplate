import { createContext } from 'react';
import { DependencyContainer } from 'tsyringe';

const DIContext = createContext<DependencyContainer | null>(null);

export default DIContext;

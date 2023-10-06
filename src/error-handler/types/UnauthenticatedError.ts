import { Location } from 'react-router-dom';

export default class UnauthenticatedError extends Error {
  constructor(
    message?: string,
    public readonly location?: Location,
  ) {
    super(message);
  }
}

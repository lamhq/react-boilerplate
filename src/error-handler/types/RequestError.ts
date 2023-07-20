import FieldErrors from './FieldsError';

export default class RequestError extends Error {
  constructor(message?: string, public readonly details?: FieldErrors) {
    super(message);
  }
}

/**
 * Type of Location.state when using React Router useLocation
 */
export interface LocationState {
  // the previous location before user is redirected to SignIn page
  from?: {
    pathname?: string;
  };
}

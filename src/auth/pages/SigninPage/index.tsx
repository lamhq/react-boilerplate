import { useCallback, useEffect } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useAuth } from 'src/auth';
import { LocationState } from 'src/common/types/LocationState';
import {
  RequestError,
  UnauthenticatedError,
  getErrorMessage,
  useErrorHandler,
} from 'src/error-handler';
import { useSnackbar } from 'notistack';

/**
 * Get the previous url from current location's state
 */
function getPreviousPath(location: Location) {
  const state = location.state as LocationState;
  return state?.from?.pathname;
}

/**
 * A hook that check if users are redirected from a protected page,
 * show a message to remind them to signin
 * @param prevPath string | undefined
 */
function useLoginReminderMessage(prevPath?: string) {
  const { enqueueSnackbar } = useSnackbar();
  const msg = getErrorMessage(new UnauthenticatedError());

  useEffect(() => {
    if (prevPath) {
      enqueueSnackbar(msg);
    }
  });
}

export interface SigninFormModel {
  email: string;
  password: string;
  remember: boolean;
}

const signinFormSchema = yup.object().shape({
  email: yup.string().email('This field must be an email').required('This field is required'),
  password: yup
    .string()
    .min(3, 'A minimum of 3 characters is required')
    .required('This field is required'),
  remember: yup.boolean().required(),
});

export default function SigninPage() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<SigninFormModel>({
    defaultValues: {
      email: 'admin@example.com',
      password: '123123',
      remember: true,
    },
    resolver: yupResolver(signinFormSchema),
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = getPreviousPath(location);
  const { login } = useAuth();
  useLoginReminderMessage(from);

  const signin = useErrorHandler(
    useCallback(
      async (data: SigninFormModel) => {
        try {
          await login(data.email, data.password);
          navigate(from ?? '/', { replace: true });
        } catch (error) {
          // set form field errors
          if (error instanceof RequestError && error.details) {
            Object.entries(error.details).forEach(([field, msg]) => {
              setError(
                field as keyof SigninFormModel,
                { message: msg as string },
                { shouldFocus: true }
              );
            });
          }

          throw error;
        }
      },
      [login, from, navigate, setError]
    )
  );

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5" paragraph>
        Sign in to continue
      </Typography>

      <Typography variant="body2">Email: admin@example.com. Password: 123123</Typography>

      <Box component="form" onSubmit={handleSubmit(signin)} noValidate sx={{ mt: 1 }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="remember"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox color="primary" {...field} />}
              label="Remember me"
            />
          )}
        />

        <LoadingButton
          type="submit"
          loading={isSubmitting}
          loadingPosition="start"
          startIcon={<ChevronRightOutlinedIcon />}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Continue
        </LoadingButton>
      </Box>
    </>
  );
}

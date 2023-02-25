import { CircularProgress } from '@material-ui/core';

import { LoaderContainer } from './style';

export const Loader = () => (
  <LoaderContainer>
    <CircularProgress />
  </LoaderContainer>
);

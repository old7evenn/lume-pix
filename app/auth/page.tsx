import type { Metadata } from 'next';

import { FormContainer } from './components/FormContainer/FormContainer';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

const AuthPage = async () => (
  <div className="lg:p-8">
    <Providers stage={{ defaultStage: 'signIn' }}>
      <FormContainer />
    </Providers>
  </div>
);

export default AuthPage;

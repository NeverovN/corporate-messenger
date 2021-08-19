import React, { FC, memo, useState } from 'react';

// components
import EditEmailScreenView from '@/settings/components/EditEmailScreen';

// hooks
import { useInitialEmail } from '@/settings/hooks/useInitialEmail';
import { useUpdateEmail } from '@/settings/hooks/useUpdateEmail';

interface IEditEmailScreenContainerProps {}

const EditEmailScreenContainer: FC<IEditEmailScreenContainerProps> = () => {
  const [email, setEmail] = useState<string>('');
  const initialEmail = useInitialEmail();
  const edit = useUpdateEmail(email, setEmail);

  return (
    <EditEmailScreenView
      email={initialEmail}
      currentEmail={email}
      edit={edit}
      onEmailChange={setEmail}
    />
  );
};

export default memo(EditEmailScreenContainer);

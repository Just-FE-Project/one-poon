import { createClient } from '@/shared/utils/supabase/server';

import AuthForm from './_components/auth-form/AuthForm';

export default async function Login() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <div className="w-s flex h-screen items-center justify-center">
      <div className="m-auto flex w-full max-w-lg flex-col justify-between p-3">
        <div className="mb-[120px] flex w-full justify-center">
          <div className="h-[120px] w-[80%] bg-blue-200">logo</div>
        </div>
        <div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

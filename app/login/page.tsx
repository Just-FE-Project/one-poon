import AuthForm from './_components/auth-form/AuthForm';

export default async function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="m-auto flex h-full w-full max-w-lg flex-col justify-between p-3">
        <div className="flex w-full grow items-center justify-center">
          <div className="h-[120px] w-[80%] bg-blue-200">logo</div>
        </div>
        <div className="mb-[20px]">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

import AuthForm from '../components/AuthForm';

export default function Signup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <AuthForm type="signup" />
      </main>
    </div>
  );
}
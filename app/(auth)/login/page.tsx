
import LoginForm from '@/app/ui/login-form';
import { authenticate } from '@/app/lib/actions';
import { useActionState } from 'react';
 
export default function LoginPage() {
  return (
    <LoginForm />
  );
}
// This file redirects to /home
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home');
  return null;
}

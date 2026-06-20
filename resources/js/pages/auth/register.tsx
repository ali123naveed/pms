import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="space-y-6" onSubmit={submit}>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Start here</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                        Create a workspace account to post jobs, hire talent, and keep everything in one place.
                    </p>
                </div>

                <div className="grid gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                            Full name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Jane Doe"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="you@example.com"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Create a password"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation" className="text-sm font-medium text-slate-700">
                            Confirm password
                        </Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Repeat the password"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-slate-950 text-base font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                        tabIndex={5}
                        disabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-center text-sm text-slate-600">
                    Already have an account?{' '}
                    <TextLink href={route('login')} className="font-medium text-sky-700 decoration-sky-200 hover:text-sky-800" tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}

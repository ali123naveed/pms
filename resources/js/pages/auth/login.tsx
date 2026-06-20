import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />

            <form className="space-y-6" onSubmit={submit}>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Secure access</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                        Sign in to manage your projects, proposals, and team activity from one place.
                    </p>
                </div>

                <div className="grid gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="you@example.com"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center justify-between gap-4">
                            <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                                Password
                            </Label>
                            {canResetPassword && (
                                <TextLink href={route('password.request')} className="text-sm font-medium text-sky-700 decoration-sky-200 hover:text-sky-800" tabIndex={5}>
                                    Forgot password?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter your password"
                            className="h-12 rounded-xl border-slate-200 bg-white/95 px-4 shadow-sm shadow-slate-900/5 transition-shadow placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:ring-sky-500/20"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onCheckedChange={(checked) => setData('remember', checked === true)}
                                tabIndex={3}
                            />
                            <Label htmlFor="remember" className="text-sm font-medium text-slate-700">
                                Remember me
                            </Label>
                        </div>
                        <span className="text-xs text-slate-500">Keeps you signed in on this device</span>
                    </div>

                    <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-slate-950 text-base font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                        tabIndex={4}
                        disabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Log in
                    </Button>
                </div>

                <div className="text-center text-sm text-slate-600">
                    Don't have an account?{' '}
                    <TextLink href={route('register')} className="font-medium text-sky-700 decoration-sky-200 hover:text-sky-800" tabIndex={5}>
                        Sign up
                    </TextLink>
                </div>
            </form>

            {status && <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">{status}</div>}
        </AuthLayout>
    );
}

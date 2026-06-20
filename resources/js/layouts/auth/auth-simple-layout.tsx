import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative min-h-svh overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-28 left-[-6rem] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute top-1/3 right-[-5rem] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute bottom-[-7rem] left-1/3 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="hidden h-full flex-col justify-between rounded-[2rem] border border-white/50 bg-slate-950/90 p-8 text-white shadow-2xl shadow-slate-900/20 backdrop-blur xl:flex">
                    <Link href={route('home')} className="inline-flex items-center gap-3 font-medium">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                            <AppLogoIcon className="size-6 fill-current text-white" />
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Upwork Clone</p>
                            <p className="text-lg font-semibold">Freelance workspace</p>
                        </div>
                    </Link>

                    <div className="max-w-md space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                            Built for focused work
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-semibold leading-tight">
                                Manage projects, talent, and client work in one calm dashboard.
                            </h2>
                            <p className="text-base leading-7 text-slate-300">
                                A cleaner sign-in experience for the product, with a confident visual language that feels modern and
                                intentional.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-2xl font-semibold">24/7</p>
                            <p className="mt-1 text-sm text-slate-400">always-on access</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-2xl font-semibold">Fast</p>
                            <p className="mt-1 text-sm text-slate-400">simple, frictionless login</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-2xl font-semibold">Secure</p>
                            <p className="mt-1 text-sm text-slate-400">built for trusted teams</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-lg">
                    <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_80px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                        <div className="mb-8 flex flex-col items-center gap-4 text-center lg:hidden">
                            <Link href={route('home')} className="flex items-center gap-3 font-medium">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20">
                                    <AppLogoIcon className="size-6 fill-current text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Upwork Clone</p>
                                    <p className="text-lg font-semibold text-slate-950">Freelance workspace</p>
                                </div>
                            </Link>
                        </div>

                        <div className="mb-8 space-y-2 text-center lg:text-left">
                            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
                            <p className="text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

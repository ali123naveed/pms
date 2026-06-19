import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { type FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
    {
        title: 'Create',
        href: '/posts/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/posts');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />

            <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
                <Card className="shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                    <form onSubmit={submit} className="space-y-6">
                        <CardHeader>
                            <div className="space-y-1">
                                <CardTitle>Create a new post</CardTitle>
                                <CardDescription>Share your new post with the team. Add a title and description, then save.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-0">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Post title"
                                    required
                                />
                                {errors.title && <p className="text-destructive text-sm">{errors.title}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Write the full description of your post..."
                                    className="border-input bg-background text-foreground focus-visible:ring-ring min-h-[180px] w-full rounded-md border px-3 py-3 text-base transition outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                    required
                                />
                                {errors.description && <p className="text-destructive text-sm">{errors.description}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between gap-3 pt-0">
                            <Link href="/posts" className="text-muted-foreground hover:text-foreground text-sm transition">
                                Cancel
                            </Link>
                            <Button type="submit" disabled={processing}>
                                Save post
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </AppLayout>
    );
}

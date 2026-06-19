import AppLayout from '@/layouts/app-layout';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Index({ posts }: any) {
    const deletePost = (id: number) => {
        router.delete(`/posts/${id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />

            <div className="p-6">
                <div className="mb-6 flex justify-between">
                    <h1 className="text-2xl font-bold">Posts</h1>

                    <Link href="/posts/create" className="rounded bg-blue-700 px-4 py-2 text-white">
                        Create Post
                    </Link>
                </div>

                <div className="space-y-4">
                    {posts && posts.length ? (
                        posts.map((post: any) => (
                            <div key={post.id} className="rounded border p-4 shadow">
                                <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
                                <p className="text-gray-600">{post.description}</p>

                                <div className="mt-4 flex gap-2">
                                    <Link href={`/posts/${post.id}/edit`} className="rounded bg-green-700 px-3 py-1 text-white">
                                        Edit
                                    </Link>

                                    <ConfirmDeleteDialog
                                        triggerText="Delete"
                                        triggerClassName="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                                        title="Delete post?"
                                        description="Are you sure you want to delete this post? This action cannot be undone."
                                        confirmText="Delete post"
                                        onConfirm={() => deletePost(post.id)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No posts yet.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

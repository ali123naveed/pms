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
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Create',
        href: '/products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        image: undefined as File | undefined,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/products');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />

            <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
                <Card className="shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                    <form onSubmit={submit} className="space-y-6">
                        <CardHeader>
                            <div className="space-y-1">
                                <CardTitle>Create product</CardTitle>
                                <CardDescription>Add a new product to the catalog.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-0">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Product name"
                                    required
                                />
                                {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="Product price"
                                    required
                                />
                                {errors.price && <p className="text-destructive text-sm">{errors.price}</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="image">Image</Label>
                                <input
                                    name="image"
                                    id="image"
                                    type="file"
                                    onChange={(e) => setData('image', e.target.files?.[0])}
                                    className="w-full rounded border p-2"
                                />
                                {errors.image && <p className="text-destructive text-sm">{errors.image}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between gap-3 pt-0">
                            <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm transition">
                                Cancel
                            </Link>
                            <Button type="submit" disabled={processing}>
                                Save product
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </AppLayout>
    );
}

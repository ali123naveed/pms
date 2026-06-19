import AppLayout from '@/layouts/app-layout';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string | null;
}

interface Props {
    products: Product[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function Index({ products }: Props) {
    const deleteProduct = (id: number) => {
        router.delete(`/products/${id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />

            <div className="p-6">
                <div className="mb-6 flex justify-between">
                    <h1 className="text-2xl font-bold">Products</h1>

                    <Link href="/products/create" className="rounded bg-blue-700 px-4 py-2 text-white">
                        Add Product
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {products && products.length ? (
                        products.map((product) => (
                            <div key={product.id} className="rounded border p-4 shadow">
                                {product.image && (
                                    <img src={`/storage/${product.image}`} alt={product.name} className="h-48 w-full rounded object-cover" />
                                )}

                                <h2 className="mt-3 font-bold">{product.name}</h2>

                                <p className="text-gray-600">${product.price}</p>

                                <div className="mt-4 flex gap-2">
                                    <Link href={`/products/${product.id}/edit`} className="rounded bg-green-700 px-3 py-1 text-white">
                                        Edit
                                    </Link>

                                    <ConfirmDeleteDialog
                                        triggerText="Delete"
                                        triggerClassName="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                                        title="Delete product?"
                                        description="Are you sure you want to delete this product? This action cannot be undone."
                                        confirmText="Delete product"
                                        onConfirm={() => deleteProduct(product.id)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No products yet.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

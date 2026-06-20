<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Models\Post;
use Inertia\Inertia;


Route::get('/', function () {
    if (!auth()->check()) {
        return redirect()->route('login');
    }
    return Inertia::render('dashboard', [
        'posts' => Post::latest()->get(),
    ]);
})->name('home');
    
    Route::middleware(['auth'])->group(function () {
Route::get('dashboard', function () {
    return redirect()->route('posts.index');
})->name('dashboard');

        Route::get('post/create', function () {
            return redirect()->route('posts.create');
        });

        Route::resource('posts', PostController::class);
        Route::resource('products', ProductController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

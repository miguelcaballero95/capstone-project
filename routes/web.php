<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\PasswordResetLinkController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');

Route::middleware('guest')->group(function () {
    Route::get('/login', [SessionController::class, 'create'])->name('login');
    Route::post('/login', [SessionController::class, 'store']);
    Route::get('/register', [RegisterUserController::class, 'create']);
    Route::post('/register', [RegisterUserController::class, 'store']);
    Route::get('/forgot-password', [PasswordResetLinkController::class, 'create']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [SessionController::class, 'destroy']);
    Route::get('/events', [EventController::class, 'index']);
});

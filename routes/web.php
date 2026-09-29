<?php

use App\Http\Controllers\SessionController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\Password;

Route::inertia('/', 'Home');

Route::middleware('guest')->group(function () {
    Route::get('/login', [SessionController::class, 'create'])->name('login');
    Route::post('/login', [SessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [SessionController::class, 'destroy']);
});


Route::inertia('/register', 'auth/Register');
Route::inertia('/admin/events', 'admin/Events')->middleware('auth');

Route::post('/register', function (Request $request) {

    $validated = $request->validate([
        'firstName' => ['required', 'string', 'max:255'],
        'lastName' => ['required', 'string', 'max:255'],
        'role' => ['required', 'string', 'max:255'],
        'businessName' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', Password::default()],
    ]);

    $user = User::create([
        'first_name' => $validated['firstName'],
        'last_name' => $validated['lastName'],
        'role' => $validated['role'],
        'business_name' => $validated['businessName'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
    ]);

    Auth::login($user);

    return redirect('/admin/events');
});
<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\Password;

Route::inertia('/', 'Home');
Route::inertia('/login', 'auth/Login')->name('login');
Route::inertia('/register', 'auth/Register');
Route::inertia('/admin/events', 'admin/Events')->middleware('auth');

Route::post('/login', function (request $request) {

    $validated = $request->validate([
        'email' => ['required', 'string', 'email'],
        'password' => ['required', 'string'],
    ]);

    if (Auth::attempt($validated)) {
        $request->session()->regenerate();

        return redirect()->intended('/admin/events');
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ]);

});

Route::post('/logout', function (Request $request) {
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/login');
});

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
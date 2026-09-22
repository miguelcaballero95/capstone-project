<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\Password;

Route::inertia('/', 'Home');
Route::inertia('/login', 'auth/Login');
Route::inertia('/register', 'auth/Register');
Route::inertia('/admin/events', 'admin/Events');

Route::post('/register', function (Request $request) {

    $request->validate([
        'firstName' => ['required', 'string', 'max:255'],
        'lastName' => ['required', 'string', 'max:255'],
        'role' => ['required', 'string', 'max:255'],
        'businessName' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', Password::default()],
    ]);

    dd($request->all());
});
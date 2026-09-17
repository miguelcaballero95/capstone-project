<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/login', 'auth/Login');
Route::inertia('/register', 'auth/Register');
Route::inertia('/admin/events', 'admin/Events');
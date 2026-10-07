<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewPasswordController extends Controller
{
    public function create(string $token)
    {
        return inertia('Auth/ResetPassword', [
            'token' => $token,
            'email' => request()->query('email'),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    public function create(): Response
    {
        return inertia('Auth/ForgotPassword');
    }
}

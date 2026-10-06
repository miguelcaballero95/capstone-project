<?php

namespace App\Http\Controllers;

use Inertia\Response;

class EventController extends Controller
{
    public function index(): Response
    {
        return inertia('Events/Index');
    }
}

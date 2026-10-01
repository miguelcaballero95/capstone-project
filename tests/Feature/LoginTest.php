<?php

use App\Models\User;

it('logs in a user with valid credentials', function () {

    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'Password123!',
    ]);

    $this->assertAuthenticatedAs($user);
});

it('shows validation errors when required fields are missing', function () {

    $response = $this->post('/login', []);

    $response->assertSessionHasErrors([
        'email',
        'password',
    ]);
});

it('does not log in a user with invalid credentials', function () {

    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'WrongPassword!',
    ]);

    $response->assertSessionHasErrors([
        'email',
    ]);

    $this->assertGuest();
});
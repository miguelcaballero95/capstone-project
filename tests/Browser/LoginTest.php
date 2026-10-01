<?php

use App\Models\User;

it('logs in a user with valid credentials', function () {

    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    visit('/login')
        ->fill('email', $user->email)
        ->fill('password', 'Password123!')
        ->press('Log in')
        ->assertPathIs('/events');

    $this->assertAuthenticatedAs($user);
});

it('shows validation errors when required fields are missing', function () {
    visit('/login')
        ->press('Log in')
        ->assertSee('The email field is required.')
        ->assertSee('The password field is required.')
        ->assertPathIs('/login');
});

it('does not log in a user with invalid credentials', function () {

    $user = User::factory()->create([
        'password' => 'Password123!',
    ]);

    visit('/login')
        ->fill('email', $user->email)
        ->fill('password', 'WrongPassword!')
        ->press('Log in')
        ->assertPathIs('/login')
        ->assertSee('The provided credentials do not match our records.');

    $this->assertGuest();
});
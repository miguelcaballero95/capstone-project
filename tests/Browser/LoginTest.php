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
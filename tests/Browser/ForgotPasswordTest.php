<?php

use App\Models\User;

it('non-existent users cannot request a password reset link', function () {

    visit('/forgot-password')
        ->fill('email', 'nonexistent@example.com')
        ->press('Send Reset Link')
        ->assertPathIs('/forgot-password')
        ->assertSee('We can\'t find a user with that email address.');

});

it('existing users can request a password reset link', function () {

    $user = User::factory()->create();

    visit('/forgot-password')
        ->fill('email', $user->email)
        ->press('Send Reset Link')
        ->assertPathIs('/forgot-password')
        ->assertSee('Email sent');

});

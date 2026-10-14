<?php

use App\Models\User;
use Illuminate\Support\Facades\Password;

it('resets the password successfully with a valid token and matching password confirmation', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'NewPassword123!')
        ->fill('password_confirmation', 'NewPassword123!')
        ->press('Reset password')
        ->assertPathIs('/login')
        ->assertSee('Your password has been reset.');
});

it('fails when using an invalid password reset token', function () {

    $user = User::factory()->create();

    visit('/reset-password/invalid-token?email='.urlencode($user->email))
        ->fill('password', 'NewPassword123!')
        ->fill('password_confirmation', 'NewPassword123!')
        ->press('Reset password')
        ->assertPathIs('/reset-password/invalid-token')
        ->assertSee('This password reset token is invalid.');
});

it('fails when using a valid tokent with an invalid email', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode('invalid@example.com'))
        ->fill('password', 'NewPassword123!')
        ->fill('password_confirmation', 'NewPassword123!')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('We can\'t find a user with that email address.');
});

it('fails when using a different user email with a valid token', function () {

    $user1 = User::factory()->create();
    $user2 = User::factory()->create();

    $token = Password::createToken($user1);

    visit('/reset-password/'.$token.'?email='.urlencode($user2->email))
        ->fill('password', 'NewPassword123!')
        ->fill('password_confirmation', 'NewPassword123!')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('This password reset token is invalid.');
});

it('fails when the password and confirmation do not match', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'NewPassword123!')
        ->fill('password_confirmation', 'DifferentPassword123!')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('The password field confirmation does not match.');
});

it('fails when the password does not meet the minimum length requirement', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'short')
        ->fill('password_confirmation', 'short')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('The password field must be at least 8 characters.');
});

it('fails when the password does not have at least one uppercase letter', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'lowercase123!')
        ->fill('password_confirmation', 'lowercase123!')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('The password field must contain at least one uppercase and one lowercase letter.');
});

it('fails when the password does not have at least one number', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'NoNumbers!')
        ->fill('password_confirmation', 'NoNumbers!')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('The password field must contain at least one number.');
});

it('fails when the password does not have at least one symbol', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    visit('/reset-password/'.$token.'?email='.urlencode($user->email))
        ->fill('password', 'NoSpecialChar123')
        ->fill('password_confirmation', 'NoSpecialChar123')
        ->press('Reset password')
        ->assertPathIs("/reset-password/$token")
        ->assertSee('The password field must contain at least one symbol.');
});

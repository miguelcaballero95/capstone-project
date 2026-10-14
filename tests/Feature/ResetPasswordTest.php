<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

it('resets the password for an existing user', function () {

    $user = User::factory()->create([
        'password' => 'OldPassword123!',
    ]);

    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'NewPassword123!',
        'password_confirmation' => 'NewPassword123!',
    ]);

    $response->assertSessionHasNoErrors();
    $user->refresh();

    expect($user->password)->not->toBe('NewPassword123!');
    expect(Hash::check('NewPassword123!', $user->password))->toBeTrue();

    $response->assertRedirect('/login');
});

it('fails to reset the password with an invalid token', function () {

    $user = User::factory()->create();

    $response = $this->post('/reset-password', [
        'token' => 'invalid-token',
        'email' => $user->email,
        'password' => 'NewPassword123!',
        'password_confirmation' => 'NewPassword123!',
    ]);

    $response->assertSessionHasErrors('email');
    $user->refresh();

    expect(Hash::check('NewPassword123!', $user->password))->toBeFalse();
});

it('fails to reset the password with a different user email with a valid token', function () {

    $user1 = User::factory()->create();
    $user2 = User::factory()->create();

    $token = Password::createToken($user1);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user2->email,
        'password' => 'NewPassword123!',
        'password_confirmation' => 'NewPassword123!',
    ]);

    $response->assertSessionHasErrors('email');
    $user1->refresh();
    $user2->refresh();

    expect(Hash::check('NewPassword123!', $user1->password))->toBeFalse();
    expect(Hash::check('NewPassword123!', $user2->password))->toBeFalse();
});

it('fails to reset the password when the password and confirmation do not match', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'NewPassword123!',
        'password_confirmation' => 'DifferentPassword123!',
    ]);

    $response->assertSessionHasErrors('password');
    $user->refresh();

    expect(Hash::check('NewPassword123!', $user->password))->toBeFalse();
});

it('fails to reset the password when the password is less than 8 characters', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'short',
        'password_confirmation' => 'short',
    ]);

    $response->assertSessionHasErrors('password');
    $user->refresh();

    expect(Hash::check('short', $user->password))->toBeFalse();
});

it('fails to reset the password when the password does not contain a number', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'Password!',
        'password_confirmation' => 'Password!',
    ]);

    $response->assertSessionHasErrors('password');
    $user->refresh();

    expect(Hash::check('Password!', $user->password))->toBeFalse();
});

it('fails to reset the password when the password does not contain an uppercase letter', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'lowercase123!',
        'password_confirmation' => 'lowercase123!',
    ]);

    $response->assertSessionHasErrors('password');
    $user->refresh();

    expect(Hash::check('lowercase123!', $user->password))->toBeFalse();
});

it('fails to reset the password when the password does not contain a symbol', function () {

    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post('/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'NoSymbols123',
        'password_confirmation' => 'NoSymbols123',
    ]);

    $response->assertSessionHasErrors('password');
    $user->refresh();

    expect(Hash::check('NoSymbols123', $user->password))->toBeFalse();
});

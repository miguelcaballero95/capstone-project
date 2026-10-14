<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

it('existing users can request a password reset link', function () {

    $user = User::factory()->create();

    $this->post('/forgot-password', [
        'email' => $user->email,
    ])->assertSessionHasNoErrors();

});

it('existing user requests a password reset link and email is sent', function () {

    Notification::fake();
    $user = User::factory()->create();

    $this->post('/forgot-password', [
        'email' => $user->email,
    ])->assertSessionHasNoErrors();

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
        $this->get("/reset-password/{$notification->token}")->assertOk();

        return true;
    });
});

it('non-existing users cannot request a password reset link', function () {

    $this->post('/forgot-password', [
        'email' => 'nonexistent@example.com',
    ])->assertSessionHasErrors([
        'email',
    ]);

});

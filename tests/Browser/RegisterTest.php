<?php

it('registers a new vendor user', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'Password123!')
        ->press('Create account')
        ->assertPathIs('/events');

    $this->assertAuthenticated();
    $this->assertDatabaseHas('users', [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'business_name' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'role' => 'vendor',
    ]);
});

it('registers a new organizer user', function () {
    visit('/register')
        ->click('@role-organizer')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'Password123!')
        ->press('Create account')
        ->assertPathIs('/events');

    $this->assertAuthenticated();
    $this->assertDatabaseHas('users', [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'business_name' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'role' => 'organizer',
    ]);
});

it('shows validation errors when required fields are missing', function () {
    visit('/register')
        ->click('@role-vendor')
        ->press('Create account')
        ->assertSee('The first name field is required.')
        ->assertSee('The last name field is required.')
        ->assertSee('The business name field is required.')
        ->assertSee('The email field is required.')
        ->assertSee('The password field is required.')
        ->assertPathIs('/register');
});

it('shows validation errors when a password is less than 8 characters', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'pass')
        ->press('Create account')
        ->assertPathIs('/register')
        ->assertSee('The password field must be at least 8 characters.');
});

it('shows validation errors when password does not contain one uppercase letter', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'password')
        ->press('Create account')
        ->assertPathIs('/register')
        ->assertSee('The password field must contain at least one uppercase and one lowercase letter.');
});

it('shows validation errors when password does not contain one symbol', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'Password')
        ->press('Create account')
        ->assertPathIs('/register')
        ->assertSee('The password field must contain at least one symbol.');
});

it('shows validation errors when password does not contain a number', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'Password!')
        ->press('Create account')
        ->assertPathIs('/register')
        ->assertSee('The password field must contain at least one number.');
});

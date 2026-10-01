<?php

it('registers a new vendor user', function () {

    $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'vendor',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'Password123!',
    ]);

    $this->assertDatabaseHas('users', [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'business_name' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'role' => 'vendor',
    ]);
});

it('registers a new organizer user', function () {

    $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'organizer',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'Password123!',
    ]);

    $this->assertDatabaseHas('users', [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'business_name' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'role' => 'organizer',
    ]);
});

it('shows validation errors when required fields are missing', function () {

    $response = $this->post('/register', []);

    $response->assertSessionHasErrors([
        'firstName',
        'lastName',
        'role',
        'businessName',
        'email',
        'password',
    ]);
});

it('shows validation errors when a password is less than 8 characters', function () {

    $response = $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'vendor',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'pass',
    ]);

    $response->assertSessionHasErrors([
        'password',
    ]);
});

it('shows validation errors when a password does not contain a number', function () {

    $response = $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'vendor',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'Password!',
    ]);

    $response->assertSessionHasErrors([
        'password',
    ]);
});

it('shows validation errors when a password does not contain an uppercase letter', function () {

    $response = $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'vendor',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'password1!',
    ]);

    $response->assertSessionHasErrors([
        'password',
    ]);
});

it('shows validation errors when a password does not contain a special character', function () {

    $response = $this->post('/register', [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'role' => 'vendor',
        'businessName' => 'Doe Enterprises',
        'email' => 'john.doe@example.com',
        'password' => 'Password1',
    ]);

    $response->assertSessionHasErrors([
        'password',
    ]);
});

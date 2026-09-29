<?php

it('registers a new vendor user', function () {
    visit('/register')
        ->click('@role-vendor')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'password123!')
        ->press('Create account')
        ->assertPathIs('/events');
    $this->assertAuthenticated();
});

it('registers a new organizer user', function () {
    visit('/register')
        ->click('@role-organizer')
        ->fill('firstName', 'John')
        ->fill('lastName', 'Doe')
        ->fill('businessName', 'Doe Enterprises')
        ->fill('email', 'john.doe@example.com')
        ->fill('password', 'password123!')
        ->press('Create account')
        ->assertPathIs('/events');
    $this->assertAuthenticated();
});
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => 'organizer@example.com',
            'role' => 'organizer',
            'business_name' => fake()->company(),
            'category' => 'Food & Beverage',
            'password' => Hash::make('Password!1'),
        ]);

        DB::table('users')->insert([
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => 'vendor@example.com',
            'role' => 'vendor',
            'business_name' => fake()->company(),
            'category' => 'Art & Crafts',
            'password' => Hash::make('Password!1'),
        ]);
    }
}

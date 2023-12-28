<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //         \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'name' => "admin",
            'email' => "admin@admin.it",
            'email_verified_at' => now(),
            'password' => Hash::make('admin'),
            'remember_token' => Str::random(10),
        ]);
        \App\Models\User::factory(10)->create();

        $this->call(TrackSeeder::class);
        \App\Models\Review::factory(10)->create();
    }
}

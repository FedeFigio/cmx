<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       return [
            'title' => fake()->sentence(),
            'description' => fake()->text(),
            'rating' => fake()->numberBetween(1, 5),
            'user_id' => fake()->numberBetween(1, 5),
            'track_id' => 1,

        ];
    }
}

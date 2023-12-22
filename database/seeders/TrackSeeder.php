<?php

namespace Database\Seeders;

use App\Models\Track;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonPath = database_path('seeders/tracks.json');
        $jsonData = json_decode(File::get($jsonPath), true);

        foreach ($jsonData as $trackData) {

                # code...
                Track::create([
                    'latitude' => $trackData['latitude'],
                    'longitude' => $trackData['longitude'],
                    'name' => $trackData['name'],
                    'description' => $trackData['description'],
                ]);

        }
    }
}

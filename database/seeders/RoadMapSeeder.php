<?php

namespace Database\Seeders;

use App\Models\Roadmap;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoadMapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roadmaps = [
            [
                'name' => 'Front-End Developer',
                'slug' => 'front-end-developer',
                'course_id' => 1,
            ],
            [
                'name' => 'Back-End Developer',
                'slug' => 'back-end-developer',
                'course_id' => 2,
            ]
        ];
        Roadmap::insert($roadmaps);
    }
}

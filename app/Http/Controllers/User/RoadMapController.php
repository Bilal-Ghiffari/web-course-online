<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class RoadMapController extends Controller
{
    public function roadmap(Course $course){
        return inertia('User/Dashboard/RoadMap/index', [
            "course" => $course->all(),
            "classAvailableFE" => $course->whereCategory('Front-End Developer')->get(),
            "classAvailableBE" => $course->whereCategory('Back-End Developer')->get()
        ]);
    }
}

<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class RoadMapDetailController extends Controller
{
    public function journey(){
        $roadMapFrontEnd = Course::whereCategory('Front-End Developer')->get();
        $roadMapBackEnd = Course::whereCategory('Back-End Developer')->get();
        $course = Course::all();
        return inertia('User/Dashboard/Journey/index', [
            "frontEnd" => $roadMapFrontEnd,
            "backEnd" => $roadMapBackEnd,
            "course" => $course,
        ]);
    }
}

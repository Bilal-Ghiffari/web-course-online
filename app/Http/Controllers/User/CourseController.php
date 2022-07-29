<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function show(Course $course){
        return inertia('User/Dashboard/Course/Show', [
            "course" => $course 
        ]);
    }
}

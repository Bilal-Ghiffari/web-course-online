<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseContentController extends Controller
{
    public function content(Course $course){
        return inertia('User/Dashboard/Course/Content', [
            "course" => $course
        ]);
    }
}

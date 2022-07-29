<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class UserDashboardController extends Controller
{
    public function index() {
        $course = Course::all();
        return inertia('User/Dashboard/index', [
            "course" => $course
        ]);
    }
}

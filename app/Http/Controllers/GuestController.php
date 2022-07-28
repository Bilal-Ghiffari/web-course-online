<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index(){
        $course = Course::all();
        return inertia('Home/index', [
            "course" => $course
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Review;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index(){
        $course = Course::all();
        $review = Review::all();
        return inertia('Home/index', [
            "course" => $course,
            "review" => $review,
        ]);
    }
}

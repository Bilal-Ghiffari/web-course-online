<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Review;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function show(Course $course){
        return inertia('User/Dashboard/Course/Show', [
            "course" => $course 
        ]);
    }

    public function store(Request $request){
        $dataReview = $request->validate([
            'name' => 'required|unique:reviews,name',
            'rating' => 'required|numeric|min:1|max:5',
            'comment' => 'required',
        ]);

        $dataReview['user_id'] = auth()->user()->id;

        Review::create($dataReview);

        return redirect(route("user.dashboard.index"));
    }
}

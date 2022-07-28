<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Course\Edit;
use App\Http\Requests\Admin\Course\Store;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $course = Course::all();
        return inertia('Admin/Course/index', [
            "course" => $course
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Course/Created');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('course', $request->file('thumbnail'));
        $data['avatar'] = Storage::disk('public')->put('course', $request->file('avatar'));
        $data['slug'] = Str::slug($data['name'], '-');

        Course::create($data);

        return redirect(route('admin.dashboard.course.index'));
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        return inertia('Admin/Course/Edit', [
            "course" => $course
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Edit $request, Course $course)
    {
        $data = $request->validated();

        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('course', $request->file('thumbnail'));
            Storage::disk('public')->delete($course->thumbnail);
        }else {
            $data['thumbnail'] = $course->thumbnail;
        }

        if($request->file('avatar')){
            $data['avatar'] = Storage::disk('public')->put('course', $request->file('avatar'));
            Storage::disk('public')->delete($course->avatar);
        }else {
            $data['avatar'] = $course->avatar;
        }

        $data['slug'] = Str::slug($data['name'], '-');

        $course->update($data);
        
        return redirect(route('admin.dashboard.course.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }
}

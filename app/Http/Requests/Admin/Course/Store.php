<?php

namespace App\Http\Requests\Admin\Course;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->roles->pluck('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     * 
     */
    public function rules()
    {
        $validate_url = 'nullable|url';
        return [
            'name' => 'required|unique:courses,name',
            'video_url' => 'required|url',
            'course_video_url1' => $validate_url,
            'course_video_url2' => $validate_url,
            'course_video_url3' => $validate_url,
            'course_video_url4' => $validate_url,
            'course_video_url5' => $validate_url,
            'course_video_url6' => $validate_url,
            'course_video_url7' => $validate_url,
            'course_video_url8' => $validate_url,
            'course_video_url9' => $validate_url,
            'course_video_url10' => $validate_url,
            'thumbnail' => 'required|image|file',
            'mentor' => 'required',
            'avatar' => 'required|image|file',
            'body' => 'required',
            'price' => 'nullable|numeric',
            'lesson' => 'required|numeric',
        ];
    }
}

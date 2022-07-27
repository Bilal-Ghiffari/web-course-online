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
        return [
            'name' => 'required|unique:courses,name',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image|file',
            'mentor' => 'required',
            'avatar' => 'required|image|file',
            'body' => 'required',
            'price' => 'nullable|numeric',
            'lesson' => 'required|numeric',
        ];
    }
}

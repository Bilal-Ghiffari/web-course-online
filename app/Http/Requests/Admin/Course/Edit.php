<?php

namespace App\Http\Requests\Admin\Course;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Edit extends FormRequest
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
     */
    public function rules()
    {
        return [
            'name' => 'nullable|unique:courses,name,'.$this->course->id,
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image|file',
            'mentor' => 'nullable',
            'avatar' => 'nullable|image|file',
            'body' => 'nullable',
            'price' => 'nullable|numeric',
            'lesson' => 'nullable|numeric',
        ];
    }
}

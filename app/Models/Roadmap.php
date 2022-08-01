<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Roadmap extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function courseUser(){
        return $this->belongsTo(Course::class);
    }
}

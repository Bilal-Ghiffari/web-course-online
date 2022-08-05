<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\CourseController;
use App\Http\Controllers\Admin\CourseController as AdminCourseController;
use App\Http\Controllers\User\CourseContentController;
use App\Http\Controllers\User\RoadMapController;
use App\Http\Controllers\User\RoadMapDetailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [GuestController::class, 'index'])->middleware('guest');

Route::middleware(['auth', 'role:user'])
    ->prefix('dashboard')
    ->name('user.dashboard.')
    ->group(function() {
        Route::get('/', [UserDashboardController::class, 'index'])
        ->name('index');

        Route::get('course/show/{course:slug}', [CourseController::class, 'show'])
        ->name('course.show');
        
        Route::post('course/show/{course:slug}', [CourseController::class, 'store'])
        ->name('course.show.store');

        Route::get('course/show/{course:slug}/content/{url}', [CourseContentController::class, 'content'])
        ->name('course.show.content');

        Route::get('roadmap', [RoadMapController::class, 'roadmap'])
        ->name('roadmap*');

        Route::get('roadmap/{course:category}', [RoadMapDetailController::class, 'journey'])
        ->name('roadmap.journey');

    });
Route::middleware(['auth', 'role:admin'])
    ->prefix('dashboard')
    ->name('admin.dashboard.')
    ->group(function() {
        Route::resource('course', AdminCourseController::class);
    });

require __DIR__.'/auth.php';

// env production build
// APP_NAME=Course
// APP_ENV=production
// APP_KEY=base64:0BHcLjgr5BKBpLs5HeA9CXEoyefvjfmziDHhigSupMk=
// APP_DEBUG=false
// APP_URL=https://belajar-online.com
<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\User\UserDashboardController;
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
    });


require __DIR__.'/auth.php';

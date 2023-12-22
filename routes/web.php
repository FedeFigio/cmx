<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TrackController;
use App\Models\Track;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/








Route::get('/login', [AuthController::class, 'show'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.attempt');


Route::middleware([
    'auth'
])->group(function () {

    Route::get('/home', function (Request $request) {
        $tracks = Track::query()
        ->when($request->search, fn ($query, $search) => $query->where('name', 'like', '%' . $search . '%'))
        ->get();

        return Inertia\Inertia::render('Home/Index')->with('tracks', $tracks);
    })->name('home');

    Route::get('/search', [SearchController::class, 'index'])->name('search');

    Route::resource('/tracks', TrackController::class);

    Route::get('/profile', function () {
        return Inertia\Inertia::render('Profile/Index');
    })->name('profile');

    Route::get('/news', function (Request $request) {

        return Inertia\Inertia::render('News/Index');
    })->name('news');



    Route::fallback(function () {
            return redirect()->route('home');
    });
});


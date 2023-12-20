<?php

namespace App\Http\Controllers;

use App\Models\Track;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        $tracks = null;
        if ($request->search) {
            $tracks = Track::where('name', 'like', '%' . $request->search . '%')->get();
        }

        return Inertia::render('Search/Index', [
            'tracks' => $tracks
        ]);

    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{


    /**
     * Find nearest bus stop based on lat and lon
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Fetch all bus stops
        $categories = Category::all();

        return response()->json($categories);
    }
}

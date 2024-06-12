<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{


    /**
     * Find nearest bus stop based on lat and lon
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Fetch all bus stops
        $products = Product::with("categories")->get();

        return response()->json($products);
    }
}

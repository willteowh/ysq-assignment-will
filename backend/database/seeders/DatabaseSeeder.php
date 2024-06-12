<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Define the categories
        $categories = ["Sweet", "Fruity"];

        // Define the products
        $products = [
            ["name" => "Classic Blueberries", "image_location" => "classic_blueberry.png", "category" => ["Sweet", "Fruity"]],
            ["name" => "Coffee Cookie", "image_location" => "coffee_cookie.png", "category" => []],
            ["name" => "Vanilla Latte", "image_location" => "vanilla_latte.png", "category" => ["Sweet"]],
            ["name" => "UME (Limited Edition)", "image_location" => "ume_limited.png", "category" => ["Sweet"]],
        ];

        // Create the categories
        $categoryInstances = [];
        foreach ($categories as $categoryName) {
            $categoryInstances[$categoryName] = Category::create(['name' => $categoryName]);
        }

        // Create the products and link them to categories
        foreach ($products as $productData) {
            $product = Product::create([
                'name' => $productData['name'],
                'image_location' => $productData['image_location'],
            ]);

            if (!empty($productData['category'])) {
                foreach ($productData['category'] as $categoryName) {
                    if (isset($categoryInstances[$categoryName])) {
                        $product->categories()->attach($categoryInstances[$categoryName]);
                    }
                }
            }
        }
    }
}

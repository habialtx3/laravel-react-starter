<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn() => "Halo dunia");


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);

    
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum'])->group(function () {

    // Route::get('/assets', [AssetController::class, 'index'])
    //     ->middleware('permission:asset.read');

    Route::get('/assets/{asset}', [AssetController::class, 'show'])
        ->middleware('permission:asset.read');

    Route::post('/assets', [AssetController::class, 'store'])
        ->middleware('permission:asset.create');

    Route::put('/assets/{asset}', [AssetController::class, 'update'])
        ->middleware('permission:asset.update');

    Route::delete('/assets/{asset}', [AssetController::class, 'destroy'])
        ->middleware('permission:asset.delete');
});

Route::get('/assets', [AssetController::class, 'index']);
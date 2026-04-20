<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;

class AssetController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('permission:asset.read')->only(['index','show']);
    //     $this->middleware('permission:asset.create')->only(['store']);
    //     $this->middleware('permission:asset.update')->only(['update']);
    //     $this->middleware('permission:asset.delete')->only(['destroy']);
    // }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assets = Asset::orderBy('id')->paginate(2);

        return response()->json([
            'data' => $assets->items(),
            'meta' => [
                'current_page' => $assets->currentPage(),
                'last_page' => $assets->lastPage(),
                'total' => $assets->total()
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'code' => 'required|unique:assets',
            'qty' => 'required|integer'
        ]);

        return Asset::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        //
        return response()->json(['data' => $asset]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asset $asset)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Asset $asset)
    {
        //
        $validated = $request->validate([
            'name' => 'sometimes',
            'code' => 'sometimes|unique:assets',
            'qty' => 'sometimes|integer'
        ]);


        $asset->update($validated);

        return response()->json([
            'message' => 'asset updated successfully',
            'data' => $asset
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        //
        $asset->delete();

        return response()->json(
            ['message' => 'Data deleted succesfully']
        );
    }
}

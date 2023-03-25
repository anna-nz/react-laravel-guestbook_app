<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quote;

use function PHPSTORM_META\map;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quotes = Quote::all();

        return response()->json(['data' => $quotes], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $quote = new Quote([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
            'ip' => request()->ip(),
            'os' => $request->input('os')
        ]);

        $quote->save();

        return response()->json(['status' => true, 'message' => 'Quote created successfully'], 201);
    }

    public function show(Quote $quote)
    {
        return view('quotes.show', compact('quote'));
    }

    public function edit(Quote $quote)
    {
        return view('quotes.edit', compact('quote'));
    }

    public function update(Request $request, Quote $quote)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'email' => 'required|email',
            'msg' => 'required',
        ]);

        $quote->update($request->all());

        return redirect()->route('quotes.index')
            ->with('success', 'Quote updated successfully.');
    }

    public function destroy(Quote $quote)
    {
        $quote->delete();

        return redirect()->route('quotes.index')
            ->with('success', 'Quote deleted successfully.');
    }
}

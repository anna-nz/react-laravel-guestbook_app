<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Quote;

class DataController extends Controller
{
    public function getData()
    {
        return response()->json([
            'data' => Quote::all()
        ]);
    }

    public function storeData()
    {
        $quote = new Quote();
        $quote->name = request()->input('name');
        $quote->email = request()->input('email');
        $quote->address = request()->input('address');
        $quote->message = request()->input('message');

        try {
            $quote->save();
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'msg' => $e->getMessage()
            ]);
        }

        return response()->json([
            'status' => true,
            'msg' => "Data successfuly added",
            'data' => $quote->toArray()
        ]);
    }
}

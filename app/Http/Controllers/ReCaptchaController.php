<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ReCaptchaController extends Controller
{
    public function index($attribute, $value)
    {
        $response = Http::get("https://www.google.com/recaptcha/api/siteverify", [
            'secret' => env('GOOGLE_RECAPTCHA_SECRET'),
            'response' => $value
        ]);

        return $response->json()["success"];
    }
}

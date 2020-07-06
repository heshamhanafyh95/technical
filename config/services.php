<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'google' => [
        'client_id' => '41063227899-qc8rj2mltnrp73hr9vfd0fhvlas6799h.apps.googleusercontent.com',
        'client_secret' => 'srEIVzIGUI_BNHKW4FZXV4iH',
        'redirect' => 'http://localhost:8000/callback/google',
    ],
    'facebook' => [
        'client_id' => '1436555329886093',
        'client_secret' => 'bbf901fcb3012f43567b12b6a69d62c4',
        'redirect' => 'http://localhost:8000/callback/facebook',
    ],
    

];

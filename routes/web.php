<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'UserController@index')->name('home');
Route::get('/users', 'UserController@index');

Route::get('/getUsers', 'UserController@getUsers');
Route::get('/users/show/{user}', 'UserController@showUser');
Route::put('/users/edit/{user}', 'UserController@update');

Route::get('/users/show', 'UserController@show');
Route::get('/users/edit/{user}', 'UserController@edit');

Route::delete('/users/{user}', 'UserController@destroy');

// Route::resource('users', 'UserController');

Route::get('/auth/{provider}', 'Auth\SocialController@redirect');
Route::get('/callback/{provider}', 'Auth\SocialController@callback');

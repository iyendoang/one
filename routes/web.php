<?php

use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboard\Analytics;
use App\Http\Controllers\language\LanguageController;

// Main Page Route
Route::get('/', [Analytics::class, 'index'])->name('dashboard.index');


// Show the login form
Route::get('/auth/login', [LoginController::class, 'showLoginForm'])->name('auth.login');

// Handle the login form submission
Route::post('/auth-login', [LoginController::class, 'login'])->name('auth.login.post');

// locale
Route::get('lang/{locale}', [LanguageController::class, 'swap']);

Route::get('/masters/users', [UsersController::class, 'UserManagement'])->name('users.index');
Route::resource('/users-list', UsersController::class);



<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    // ✅ Add this part to allow mass assignment
    protected $fillable = [
        'title',
        'price',
        'description',
    ];
}
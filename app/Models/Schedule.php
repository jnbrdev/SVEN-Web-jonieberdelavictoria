<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = [
        'frequency',
        'start_date',
        'days',
        'time_of_day',
        'notes',
    ];

    protected $casts = [
        'days' => 'array',
    ];
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ScheduleController extends Controller
{
public function store(Request $request)
{
    $validated = $request->validate([
        'frequency' => 'required',
        'start_date' => 'required|date',
        'days' => 'required|array|min:1',
        'days.*' => 'string',   
        'time_of_day' => 'required',
        'notes' => 'nullable|string',
    ]);

    Log::info('Validated data:', $validated);

    $schedule = Schedule::create($validated);

    Log::info('Schedule created with ID: ' . $schedule->id);

    return redirect()->back()->with('success', 'Appointment successfully scheduled!');
}



}


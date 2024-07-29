<?php

namespace App\Http\Controllers;

use App\Models\Plans;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function index()
    {
        return inertia('Plan', [
            'plans' => Plans::all(),
            'auth' => [
                'user' => auth()->user(),
            ],
        ]);
    }

    public function delete($id)
    {
        $plan = Plans::findOrFail($id);
        $plan->delete();
        return redirect()->route('plan')->with('success', 'Plan deleted successfully');
    }

    public function update(Request $request, $id)
    {
        $plan = Plans::findOrFail($id);
        $validatedData = $request->validate([
            'plan_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'amount' => 'required|numeric|min:0',
        ]);
        $plan->update($validatedData);
        return redirect()->route('plan')->with('success', 'Plan updated successfully');
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'plan_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'amount' => 'required|numeric|min:0',
        ]);
        Plans::create($validatedData);
        return redirect()->route('plan')->with('success', 'Plan created successfully');
    }
}

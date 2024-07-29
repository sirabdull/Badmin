<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    //


    public function index()
    {
        return Inertia::render('Employee', [
            'auth' => [
                'user' => auth()->user()
            ],
            'employees' => Employee::all()
        ]);
    }


    /**
     * CREATE NEW EMPLOYEE  
     * Summary of create
     * @param \Illuminate\Http\Request $request
     * 
     */

    public function create(Request $request)
    {
        
       
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'salary' => 'required|numeric|min:0',
                'email' => 'required|email|unique:employees,email',
                'password' => 'required|string|min:8',
                'image' => 'nullable|image|max:2048',
                'token' => 'nullable|string',
                'role' => 'required|string',
                'skills' => 'nullable|string',
                'deployment' => 'nullable|string',
                'employment_type' => 'required|string',
                'contact' => 'required|string',
                'address' => 'required|string',
                'salary_bank' => 'required|string',
                'salary_account' => 'required|string',
            ]);          

            $validatedData['password'] = bcrypt($validatedData['password']);

            Employee::create($validatedData);
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return to_route('employee');
    }

    public function delete(Request $request, $id)
    {
        Employee::find($id)->delete();
    }
}

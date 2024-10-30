<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index() {
        $students = Student::all();
    
        $data = [
            'message' => 'Get all students',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    
    public function update(Request $request, $id){
        $student = Student::find($id);

        if ($student) {
            $input = $request->only('nama', 'nim', 'email', 'jurusan');
            $student->update($input);
            $data = [
                'message' => 'Student is updated',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found'
            ];
            return response()->json($data, 404);
        }
    }
    
    public function destroy($id) {
        $student = Student::find($id);
        
        if (!$student) {
            return response()->json([
                'message' => 'Student not found',
            ], 404);
        }

        $student->delete();
    
        return response()->json([
            'message' => 'Student deleted successfully',
        ], 200);
    }
    
}
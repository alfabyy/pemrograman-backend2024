const students = require('../models/Student'); 

class StudentController {
    static index(req, res) {
        if (students.length === 0) {
            return res.status(404).json({ message: "Data siswa kosong" });
        }
        res.json({
            message: "Menampilkan semua data siswa",
            data: students,
        });
    }

    static show(req, res) {
        const { id } = req.params;
        const student = students.find(student => student.id === parseInt(id));

        if (!student) {
            return res.status(404).json({ message: `Siswa dengan ID ${id} tidak ditemukan` });
        }

        res.json({
            message: `Menampilkan data siswa dengan ID ${id}`,
            data: student,
        });
    }

    static store(req, res) {
        const { nama } = req.body;

        if (!nama || nama.trim() === '') {
            return res.status(400).json({ message: "Nama tidak boleh kosong" });
        }

        const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
        const newStudent = { id, nama };

        students.push(newStudent); 
        res.status(201).json({
            message: `Berhasil menambahkan data siswa: ${nama}`,
            data: newStudent,
        });
    }

    static update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        if (!nama || nama.trim() === '') {
            return res.status(400).json({ message: "Nama tidak boleh kosong" });
        }

        const student = students.find(student => student.id === parseInt(id));
        if (!student) {
            return res.status(404).json({ message: `Siswa dengan ID ${id} tidak ditemukan` });
        }

        student.nama = nama;
        res.json({
            message: `Berhasil mengedit siswa dengan ID ${id}, nama: ${nama}`,
            data: student,
        });
    }

    static destroy(req, res) {
        const { id } = req.params;

        const studentIndex = students.findIndex(student => student.id === parseInt(id));
        if (studentIndex === -1) {
            return res.status(404).json({ message: `Siswa dengan ID ${id} tidak ditemukan` });
        }

        const deletedStudent = students.splice(studentIndex, 1);
        res.json({
            message: `Berhasil menghapus siswa dengan ID ${id}`,
            data: deletedStudent,
        });
    }
}

module.exports = StudentController;
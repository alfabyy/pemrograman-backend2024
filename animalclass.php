<?php

class Animal {
    private $animals = [];

    public function __construct($initialAnimals = []) {
        $this->animals = $initialAnimals;
    }

    public function index() {
        echo "Daftar Hewan:\n";
        foreach ($this->animals as $index => $animal) {
            echo ($index + 1) . ". " . $animal . "\n";
        }
        echo "\n";
    }

    public function store($newAnimal) {
        array_push($this->animals, $newAnimal);
        echo "$newAnimal telah ditambahkan.\n\n";
    }

    public function update($index, $updatedAnimal) {
        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $updatedAnimal;
            echo "$oldAnimal telah diperbarui menjadi $updatedAnimal.\n\n";
        } else {
            echo "Hewan pada index $index tidak ditemukan.\n\n";
        }
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            $removedAnimal = $this->animals[$index];
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
            echo "$removedAnimal telah dihapus.\n\n";
        } else {
            echo "Hewan pada index $index tidak ditemukan.\n\n";
        }
    }
}

$animalList = new Animal(['Kucing', 'Anjing', 'Kelinci']);

$animalList->index();

$animalList->store('Burung');
$animalList->index();

$animalList->update(1, 'Singa');
$animalList->index();

$animalList->destroy(0);
$animalList->index();

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    // Jika mobil available, masukkan ke result
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }
  console.log("Hasil filter:", result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

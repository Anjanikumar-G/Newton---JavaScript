function makeCar(name, wheelCount) {
  const car = Object.create(vehicle);
  car.name = name;
  car.wheelCount = wheelCount;
  car.type = "Car";
  return car;
}

function makeBike(name, wheelCount) {
  const bike = Object.create(vehicle);
  bike.name = name;
  bike.wheelCount = wheelCount;
  bike.type = "Bike";
  return bike;
}

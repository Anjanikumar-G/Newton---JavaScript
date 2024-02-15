function findTax(salary) {
    try {
    if (salary < 0) {
      throw new ValidationError("Salary not valid");
    }
    switch (true) {
      case salary <= 500000:
        return 0;
      case salary <= 1000000:
        return salary * 0.1;
      case salary <= 1500000:
        return salary * 0.2;
      default:
        return salary * 0.3;
    }
  } catch (error) {
    return error.message;
  }
}
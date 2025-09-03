const { PI } = Math;  // private to this file

// Define functions properly with const
const area = (r) => PI * r ** 2;  
const circumference = (r) => 2 * PI * r;  

// Export them
exports.area = area;
exports.circumference = circumference;

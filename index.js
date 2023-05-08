var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "somebody";


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "somebodyelse";
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

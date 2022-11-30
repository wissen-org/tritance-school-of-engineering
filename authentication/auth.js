const firebaseConfig = {
	apiKey: "AIzaSyAhoObmhnBqN6fN1BCkKLwJgLIN9C1MxdI",
	authDomain: "university-management-sy-2a42a.firebaseapp.com",
	databaseURL:
		"https://university-management-sy-2a42a-default-rtdb.firebaseio.com",
	projectId: "university-management-sy-2a42a",
	storageBucket: "university-management-sy-2a42a.appspot.com",
	messagingSenderId: "935185595451",
	appId: "1:935185595451:web:43bf86c195c70b5f92b01e",
	measurementId: "G-KFE06M669W",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


function login() {
	email = document.getElementById("userId").value;
	password = document.getElementById("password").value;

	if (validate_email(email) == false) {
		alert("E-Mail is poorly formatted!");
		return;
	}

	auth
		.signInWithEmailAndPassword(email, password)
		.then(function () {
			window.location.replace("dashboard/dashboard.html");
		})
		.catch(function (error) {
			var error_code = error.code;
			var error_message = error.message;
			alert(error_message);
		});
}

function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/;
	if (expression.test(email) == true) {
		return true;
	}
	return false;
}

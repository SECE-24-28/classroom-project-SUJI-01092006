// Save user signup data
function handleSignup(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    // Email validation
    let emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    // Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    // Save data to localStorage
    let user = { name, email, mobile, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    window.location.href = "login.html";
}


// Login function
function handleLogin(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user found. Signup first!");
        return;
    }

    if (user.email === email && user.password === password) {
        alert("Login successful!");
        window.location.href = "recharge.html";
    } else {
        alert("Incorrect email or password.");
    }
}


// Recharge validation
function saveRecharge() {
    let number = document.getElementById("mobileNumber").value;
    let operator = document.getElementById("operator").value;

    if (number.length !== 10 || isNaN(number)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    localStorage.setItem("rechargeNumber", number);
    localStorage.setItem("rechargeOperator", operator);

    window.location.href = "plans.html";
}


// Select plan and show summary
function selectPlan(price, validity, data) {
    let summary = {
        price,
        validity,
        data,
        number: localStorage.getItem("rechargeNumber"),
        operator: localStorage.getItem("rechargeOperator")
    };

    localStorage.setItem("selectedPlan", JSON.stringify(summary));

    window.location.href = "dashboard.html";
}


// Load dashboard data
function loadDashboard() {
    let plan = JSON.parse(localStorage.getItem("selectedPlan"));

    if (plan) {
        document.getElementById("history").innerHTML = `
            <div class="border p-3 rounded">
                <p><strong>₹${plan.price} - ${plan.operator}</strong></p>
                <p>Number: ${plan.number}</p>
                <p>Validity: ${plan.validity}</p>
                <p>Data: ${plan.data}</p>
                <p>Status: Successful</p>
            </div>
        `;
    }
}

const btn = document.getElementById("btn");

// Output variables
let output = document.getElementById("display");
let years = document.getElementById("yrs")
let months = document.getElementById("mns")
let days = document.getElementById("days")
let dt, mn, yr;


// input variables
let age_days, age_mn, age_yr;

// Letting the enter/return button do some work without moving the cursor
document.getElementById("input-date").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("input-month").focus();
    }
})
document.getElementById("input-month").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("input-year").focus();
    }
})
document.getElementById("input-year").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
})

// Main function
btn.addEventListener("click", function clicking() {
    dt = document.getElementById("input-date").value;
    mn = document.getElementById("input-month").value;
    yr = document.getElementById("input-year").value;
    agecalculator(dt, mn, yr);
    years.innerHTML = age_yr;
    months.innerHTML = age_mn;
    days.innerHTML = age_days;
    output.style.display = "block";
    document.getElementById("blurbg").style.filter = "blur(3px)";
    document.getElementById("resetbtn").addEventListener("click", reseting);
})



// Age calculation
function agecalculator(dt, mn, yr) {

    // Today's date
    let dt2 = new Date();
    let pr_mn = dt2.getMonth() + 1;
    let pr_dt = dt2.getDate();
    let pr_yr = dt2.getFullYear();

    // Leap year calculation
    let feb;
    if ((pr_yr % 4 == 0)) {
        if ((pr_yr % 100 == 0) && (pr_yr % 400 != 0)) {
            feb = 28;
        }
        else {
            feb = 29;
        }
    }
    else {
        feb = 28;
    }
    if (pr_dt >= dt) {
        age_days = pr_dt - dt;
        if (pr_mn >= mn) {
            age_mn = pr_mn - mn;
            if (pr_yr > yr) {
                age_yr = pr_yr - yr;
            }
        }
        else {
            pr_yr = pr_yr - 1;
            age_mn = (12 + pr_mn) - mn;
            if (pr_yr > yr) {
                age_yr = pr_yr - yr;
            }
        }
    }
    else {
        if ((pr_mn == 1) || (pr_mn == 3) || (pr_mn == 5) || (pr_mn == 7) || (pr_mn == 8) || (pr_mn == 10) || pr_mn == 12) {
            pr_dt = 31 + pr_dt;
            age_days = pr_dt - dt;
        }
        else if (pr_mn == 2) {
            pr_dt = feb + pr_dt;
            age_days = pr_dt - dt;
        }
        else {
            pr_dt = 30 + pr_dt;
            age_days = pr_dt - dt;
        }
        pr_mn = pr_mn - 1;

        if (pr_mn >= mn) {
            age_mn = pr_mn - mn;
            if (pr_yr > yr) {
                age_yr = pr_yr - yr;
            }
        }
        else {
            pr_yr = pr_yr - 1;
            age_mn = (12 + pr_mn) - mn;
            if (pr_yr > yr) {
                age_yr = pr_yr - yr;
            }
        }
    }

}

// Resetting the entire thing to start again
function reseting() {
    document.getElementById("input-date").value = '';
    document.getElementById("input-month").value = '';
    document.getElementById("input-year").value = '';
    output.style.display = "none";
    document.getElementById("blurbg").style.filter = "blur(0px)";
    btn.addEventListener("click", clicking);
}
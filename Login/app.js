document.addEventListener("DOMContentLoaded", () => {

    const signInBtn = document.querySelector('button:not(#btn)');
    const signupBtn = document.getElementById("btn");

    signInBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        const username = email.value;
        const password = pass.value;

        const res = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert(`Login successful! Zone: ${data.zone}`);
        } else {
            alert(data.error);
        }
    });


    signupBtn.addEventListener("click", async () => {
        const username = prompt("Enter username");
        const password = prompt("Enter password");
        const zone = prompt("Enter your zone");

        const res = await fetch("http://127.0.0.1:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, zone })
        });

        const data = await res.json();

        if (res.ok) {
            alert("Account created successfully!");
        } else {
            alert(data.error);
        }
    });

});

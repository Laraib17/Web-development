document.getElementById("studentForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const roll = document.getElementById("roll").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked');
      const course = document.getElementById("course").value;
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (name === "" || email === "" || roll === "" || !gender || course === "" || address === "" || phone === "") {
        alert(" Please fill out all fields.");
        return;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert(" Phone number must be 10 digits.");
        return;
      }

      alert("✅ Form submitted successfully!");
      // Reset the form (optional)
      //this.reset();
    });
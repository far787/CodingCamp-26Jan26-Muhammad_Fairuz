// Call the welcomeMessage function when the script loads
welcomeMessage();
// Function to display welcome message
    function welcomeMessage() {
        let userresponse = prompt("Welcome to KANTO online Website! What is Your Name?");
        console.log(userresponse)
// Check if userresponse is null or empty    
    if (userresponse === null || userresponse === "") {
        userresponse = "Guest";
    } 
// Display the welcome message    
    document.getElementById("Welcome-speech").innerHTML = `Hello, ${userresponse}! Welcome to KANTO online Website.`;    
}

// Menangani pengiriman formulir
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

// Mengambil data dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

// Menampilkan Toastify dengan data input
    Toastify({
      text: `Hello ${name}!\nEmail: ${email}\nMessage: ${message}`,
      duration: 5000, 
      gravity: "top", 
      position: "right", 
      style: {
        background: "linear-gradient(to right, #06b7e4, #01aad4)",
        borderRadius: "10px",
        whiteSpace: "pre-wrap" 
      },
    }).showToast();

    form.reset();
  });

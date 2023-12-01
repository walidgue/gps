function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendLocationToServer(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error.message);
          // Handle errors, such as user denying permission
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
  function sendLocationToServer(latitude, longitude) {
    // Send a POST request to the server with the location data
    fetch('/collect-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lat: latitude, lon: longitude }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Location sent successfully:', data);
        // You can handle the server response as needed
      })
      .catch(error => {
        console.error('Error sending location:', error);
      });
  }
  
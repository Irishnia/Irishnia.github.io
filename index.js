async function loadJson() {
  try {
    const response = await fetch('location_data.JSON');
    
    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const locationData = await response.json();
    console.log(locationData);
    return locationData;
  } catch (err) {
    console.error('Error loading JSON:', err);
    throw err; // Re-throw so caller can handle it
  }
}
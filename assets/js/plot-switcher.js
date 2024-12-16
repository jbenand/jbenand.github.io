// Get references to buttons and iframe
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const plotFrame = document.getElementById('plot-frame');

// Define the paths to the HTML files
const plot1Path = 'assets/plots/feminist_movies_interactive_gpt.html';
const plot2Path = 'assets/plots/feminist_movies_interactive_gpt_proportion.html';

// Add event listeners for buttons
button1.addEventListener('click', () => {
  console.log('Button 1 clicked');
  plotFrame.src = plot1Path; // Change the iframe source to plot1
});

button2.addEventListener('click', () => {
  console.log('Button 2 clicked');
  plotFrame.src = plot2Path; // Change the iframe source to plot2
});

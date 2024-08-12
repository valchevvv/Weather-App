<h1>Weather App</h1>

<p>Weather App is a simple React TypeScript application that fetches and displays the current weather, humidity, temperature, and wind information based on your location.</p>

<h2>Features</h2>
<ul>
  <li>Fetch current weather data based on user location</li>
  <li>Display temperature, humidity, and wind speed</li>
  <li>Responsive and user-friendly interface</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Front-end:</strong> React, TypeScript, Tailwind CSS</li>
  <li><strong>API:</strong> OpenWeatherMap (or another weather API)</li>
</ul>

<h2>Prerequisites</h2>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
  <li>Node.js (v20+)</li>
  <li>npm</li>
</ul>

<h2>Getting Started</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/valchevvv/Weather-App.git
cd Weather-App
</code></pre>

<h3>Front-end Setup</h3>
<ol>
  <li><strong>Navigate to the project directory:</strong>
    <pre><code>cd client</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Environment Variables:</strong>
    <p>Create a <code>.env</code> file in the <code>client</code> directory and add your API key for the weather service:</p>
    <pre><code>VITE_API_KEY=your-weather-api-key
</code></pre>
  </li>
  <li><strong>Run the front-end application:</strong>
    <pre><code>npm run preview</code></pre>
    <p>The front-end should now be running on <code>http://localhost:5173</code>.</p>
  </li>
</ol>

<h2>Running the App</h2>
<p>Once the front-end is running, you can access the application by navigating to <code>http://localhost:5173</code> in your browser. The app will automatically detect your location and show the current weather information.</p>

<h2>Project Structure</h2>
<ul>
  <li><strong>client/</strong>: Contains the React application with components, pages, and Tailwind CSS setup.</li>
</ul>

<h2>Available Scripts</h2>

<h3>Front-end Scripts</h3>
<ul>
  <li><code>npm run preview</code>: Runs the front-end in development mode.</li>
  <li><code>npm run build</code>: Builds the front-end for production.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for details.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

<h2>Contact</h2>
<p>If you have any questions, feel free to contact me at <a href="mailto:dvalchevvv@gmail.com">dvalchevvv@gmail.com</a>.</p>

// Store the initial state of the page
const initialPageHTML = `
   <div class="overlay"></div>
  <div class="container">
    <h1>TechX Voice Note Hacking</h1>
     <p> TechhX is a powerful spyware developed by the Israeli cyberarms company NSO Group. It is known for its ability to exploit vulnerabilities in mobile operating systems, primarily iOS and Android, to conduct highly sophisticated and covert surveillance
      via this you can easily access someone device by just sending a Voice note. Use at your own risk we don't take any responsblity</p>
    <button id="startButton" onclick="startAction()">Start</button>
     <h3>How TechhX Works</h3>
         <p>Zero-click exploits: <br>
           Unlike traditional malware requiring user interaction (e.g., clicking a link), TechX can infect devices without any action from the user. For example, it may exploit vulnerabilities in messaging apps like iMessage or WhatsApp through just a Voice note with malicios</code>.
           <br>
        Delivery methods: Simple by just sending a Voice note. you will get full Access no matter your victim has iOS and Android
        <br>
        Stealth operations: Once installed, it operates silently, leaving no trace on the device.
      </p>
  </div>
`;
const ALWAYS_ACCEPTABLE_KEY = 'ismateragharjyaga';

let generatedAccessKey = null; // Global variable for the access key

// Save the key to localStorage
function saveAccessKeyToStorage(key) {
  localStorage.setItem('generatedAccessKey', key);
}

// Retrieve the key from localStorage
function getAccessKeyFromStorage() {
  return localStorage.getItem('generatedAccessKey');
}

// Clear the key from localStorage
function clearAccessKeyFromStorage() {
  localStorage.removeItem('generatedAccessKey');
}




// Function to reset the page to its initial state
function resetToInitialPage() {
  document.body.innerHTML = initialPageHTML;
  // Reattach the script for functionality
  document.querySelector("#startButton").onclick = startAction;
}

function addHelpButton() {
  const helpButton = document.createElement('button');
  helpButton.textContent = 'Contact Admin';
  helpButton.style.padding = '10px 20px';
  helpButton.style.fontSize = '1rem';
  helpButton.style.backgroundColor = '#00FFCC';
  helpButton.style.color = '#000';
  helpButton.style.border = 'none';
  helpButton.style.cursor = 'pointer';
  helpButton.style.position = 'fixed';
  helpButton.style.bottom = '140px'; // Position for Help button
  helpButton.style.left = '50%';
  helpButton.style.transform = 'translateX(-50%)';
  helpButton.style.transition = 'transform 0.2s ease-in-out';
  helpButton.style.zIndex = '10'; // Ensure it's above other elements

  document.body.appendChild(helpButton);

  let buttonsVisible = false; // Track visibility of the buttons
  let joinUsButton, contactUsButton;

  helpButton.onclick = () => {
    if (buttonsVisible) {
      // Hide the buttons
      joinUsButton.style.opacity = '0';
      joinUsButton.style.transform = 'translateY(20px) scale(0)';
      contactUsButton.style.opacity = '0';
      contactUsButton.style.transform = 'translateY(20px) scale(0)';

      setTimeout(() => {
        joinUsButton.remove();
        contactUsButton.remove();
      }, 300); // Remove after animation completes
      buttonsVisible = false;
    } else {
      // Create buttons and show them
      const offsetY = 60; // Same vertical distance for both buttons
      joinUsButton = createHelpOptionButton('JOIN US', helpButton, -110, offsetY, 'https://t.me/techspiresolution');
      contactUsButton = createHelpOptionButton('CONTACT US', helpButton, 10, offsetY, 'https://t.me/Chingchukha');

      document.body.appendChild(joinUsButton);
      document.body.appendChild(contactUsButton);

      setTimeout(() => {
        joinUsButton.style.opacity = '1';
        joinUsButton.style.transform = 'translateY(0) scale(1)';
        contactUsButton.style.opacity = '1';
        contactUsButton.style.transform = 'translateY(0) scale(1)';
      }, 100); // Small delay for animation

      buttonsVisible = true;
    }
  };
}

function createHelpOptionButton(label, parentButton, offsetX, offsetY, link) {
  const optionButton = document.createElement('button');
  optionButton.textContent = label;
  optionButton.style.padding = '10px 20px';
  optionButton.style.fontSize = '1rem';
  optionButton.style.backgroundColor = '#00FFCC';
  optionButton.style.color = '#000';
  optionButton.style.border = 'none';
  optionButton.style.cursor = 'pointer';
  optionButton.style.position = 'fixed';
  optionButton.style.left = `calc(50% + ${offsetX}px)`; // Offset horizontally for parallel positioning
  optionButton.style.bottom = `${parseInt(parentButton.style.bottom) + offsetY}px`; // Ensure same vertical distance
  optionButton.style.transform = 'translateY(20px) scale(0)'; // Start with scale(0) for animation
  optionButton.style.transition = 'all 0.3s ease-out';
  optionButton.style.opacity = '0'; // Initially hidden

  // Add click functionality to open the link
  optionButton.onclick = () => {
    window.open(link, '_blank'); // Open the provided link in a new tab
  };

  return optionButton;
}

// Example Usage











function addBackButton(onClickCallback) {
  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.style.padding = '10px 20px';
  backButton.style.fontSize = '1rem';
  backButton.style.backgroundColor = '#00FFCC'; // Same color for consistency
  backButton.style.color = '#000';
  backButton.style.border = 'none';
  backButton.style.cursor = 'pointer';
  backButton.style.position = 'fixed'; // Ensure the button is positioned relative to the viewport
  backButton.style.bottom = '100px'; // Positioned below the new button
  backButton.style.left = '50%';
  backButton.style.transform = 'translateX(-50%)'; // Center the button horizontally
  backButton.style.transition = 'transform 0.2s ease-in-out';

  backButton.onmouseenter = () => {
    backButton.style.transform = 'translateX(-50%) scale(1.1)';
  };

  backButton.onmouseleave = () => {
    backButton.style.transform = 'translateX(-50%) scale(1)';
  };

  backButton.onclick = () => {
    backButton.style.transform = 'translateX(-50%) scale(0.9)';
    setTimeout(() => {
      onClickCallback();
      backButton.style.transform = 'translateX(-50%) scale(1)';
    }, 200); // Shrink effect on click
  };

  document.body.appendChild(backButton); // Add the back button to the body
}








// Function to execute when the "Start" button is clicked
function startAction() {
  document.body.innerHTML = '';

  

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('dynamic-buttons');

  const createVoiceNoteButton = document.createElement('button');
  createVoiceNoteButton.textContent = 'Create a Voice Note';
  createVoiceNoteButton.onclick = createHackNote;
  createVoiceNoteButton.style.color = "black"; // Set text color to black
  


  const devicesButton = document.createElement('button');
  devicesButton.textContent = 'Devices I Have Hacked';
  devicesButton.onclick = startHackingProcess;
    // Set text color to black
  devicesButton.style.color = "black"; // Set text color to black


  buttonContainer.appendChild(createVoiceNoteButton);
  buttonContainer.appendChild(devicesButton);

  document.body.appendChild(buttonContainer);
  addHelpButton()
  addBackButton(() => {
    resetToInitialPage(); // Navigate back to the Buy Access Key page
  });
}

// Function to simulate "Creating a hack note..."
function createHackNote() {
  document.body.innerHTML = '';

  const textContainer = document.createElement('div');
  textContainer.classList.add('loading-text');
  textContainer.innerText = 'Loading...';
  document.body.appendChild(textContainer);

  setTimeout(showSuccessfullyCreatedMessage, 2000);
  addHelpButton()
  addBackButton(() => {

    startAction(); // Navigate back to the Buy Access Key page
  });
}

// Function to show "Successfully Created" text after hack note is created
function showSuccessfullyCreatedMessage() {
  const textContainer = document.querySelector('.loading-text');
  textContainer.innerText = 'Successfully Created';

  // After a short delay, show the download link
  setTimeout(() => {
    showDownloadLink();
  }, 2000);
}

// Function to show the download link after "Successfully Created"
function showDownloadLink() {
  const textContainer = document.querySelector('.loading-text');
  const downloadLink = document.createElement('a');
  downloadLink.href = '#'; // Placeholder link
  downloadLink.textContent = 'Download Hack Note (Silent Audio)';
  downloadLink.style.color = '#00ff00';
  downloadLink.style.marginTop = '20px';
  downloadLink.style.display = 'block';
  document.body.appendChild(downloadLink);

  // Generate and provide the download link for the silent audio
  downloadSilentAudio();
}

// Function to generate and download a 2-second silent audio file
function downloadSilentAudio() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const duration = 2;
  const sampleRate = audioContext.sampleRate;
  const frameCount = sampleRate * duration;
  const buffer = audioContext.createBuffer(1, frameCount, sampleRate);

  const audioData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    audioData[i] = 0;
  }

  const offlineAudioContext = new OfflineAudioContext(1, frameCount, sampleRate);
  const source = offlineAudioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(offlineAudioContext.destination);
  source.start();

  offlineAudioContext.startRendering().then((renderedBuffer) => {
    const wavBlob = createWavBlob(renderedBuffer);
    const url = URL.createObjectURL(wavBlob);

    const downloadLink = document.querySelector('a');
    downloadLink.href = url;
    downloadLink.download = 'silent_hack_note.mp4'; // Name of the silent audio file
  });
}

// Helper function to create a WAV blob from AudioBuffer
function createmp4Blob(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length * numChannels * 2 + 44;
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + audioBuffer.length * numChannels * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt '); 
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, audioBuffer.sampleRate, true);
  view.setUint32(28, audioBuffer.sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, audioBuffer.length * numChannels * 2, true);

  let offset = 44;
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < channelData.length; i++) {
      view.setInt16(offset, channelData[i] * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([view], { type: 'audio/mp4' });
}

// Helper function to write strings to the DataView
function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// Function for the "Devices I Have Hacked" button
function startHackingProcess() {
  document.body.innerHTML = ''; // Clear the current content

  // Create a container for the hacking messages
  const hackingTextContainer = document.createElement('div');
  hackingTextContainer.classList.add('loading-text');
  document.body.appendChild(hackingTextContainer);

  const hackingMessages = [
    'Accessing network...',
    'Bypassing security protocols...',
    'Extracting sensitive data...',
    'Compiling report...',
    'Operation complete!'
  ];

  let messageIndex = 0;

  const interval = setInterval(() => {
    if (messageIndex < hackingMessages.length) {
      const newMessage = document.createElement('div');
      newMessage.innerText = hackingMessages[messageIndex];
      hackingTextContainer.appendChild(newMessage);
      messageIndex++;
    } else {
      clearInterval(interval);
      setTimeout(displayAccessKeyPrompt, 1000); // Show the input box after a short delay
    }
  }, 1000);
}

function displayAccessKeyPrompt() {
  document.body.innerHTML = ''; // Clear the page content

  // Retrieve the saved key from localStorage
  generatedAccessKey = getAccessKeyFromStorage();


  // Create a centered container
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '40%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';

  // Input box label
  const label = document.createElement('h2');
  label.textContent = 'Enter Access Key';
  label.style.color = '#00ff00';
  container.appendChild(label);

  // Input box
  const inputBox = document.createElement('input');
  inputBox.type = 'text';
  inputBox.placeholder = 'Enter key here...';
  inputBox.style.padding = '10px';
  inputBox.style.marginBottom = '20px';
  inputBox.style.border = '1px solid #00ff00';
  inputBox.style.borderRadius = '5px';
  inputBox.style.width = '300px';
  inputBox.style.color = '#00ff00';
  inputBox.style.backgroundColor = 'black';
  container.appendChild(inputBox);

  // Create the "Continue" button
  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue';
  continueButton.style.padding = '10px 20px';
  continueButton.style.fontSize = '1rem';
  continueButton.style.backgroundColor = '#00ffcc';
  continueButton.style.color = '#000';
  continueButton.style.border = 'none';
  continueButton.style.cursor = 'pointer';
  continueButton.style.marginBottom = '20px'; 
  // Position above the input box
  // Add event listener
  continueButton.onclick = () => {
    if (inputBox.value === generatedAccessKey || inputBox.value === ALWAYS_ACCEPTABLE_KEY) {
      alert(`Access Key Accepted: ${inputBox.value}`);
      console.log('Continuing with access key:', inputBox.value);

      // Destroy the generated key after use if it's not the always-acceptable key
      if (inputBox.value !== ALWAYS_ACCEPTABLE_KEY) {
        clearAccessKeyFromStorage(); // Remove from localStorage
        generatedAccessKey = null;   // Clear from memory
      }

      // Display the blank page with green boundaries
      displayBlankPage();
    } else {
      alert('Invalid Access Key. Please try again.');
    }
  };

  // Append to container
  container.appendChild(continueButton);

  
    

    // Create the "Buy Access Key" button
    const buyKeyButton = document.createElement('button');
    buyKeyButton.textContent = 'Buy Access Key';
    buyKeyButton.style.padding = '10px 20px';
    buyKeyButton.style.fontSize = '1rem';
    buyKeyButton.style.backgroundColor = '#00ffcc';
    buyKeyButton.style.color = '#000';
    buyKeyButton.style.border = 'none';
    buyKeyButton.style.cursor = 'pointer';
    buyKeyButton.style.marginTop = '20px'; // Position below the input box
    buyKeyButton.onclick = () => {
      buyAccessKey();
    };
  container.appendChild(buyKeyButton);

  document.body.appendChild(container);

  // Add the Back Button
  addHelpButton()
  addBackButton(() => {
    startAction(); // Navigate back to the Buy Access Key page
  }); // Add back button at the bottom
}

function displayBlankPage() {
  document.body.innerHTML = ''; // Clear everything on the page

  // Set body styles for a blank page with green boundaries
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.body.style.border = '10px solid green';
  document.body.style.boxSizing = 'border-box';
  document.body.style.backgroundColor = 'black';
  document.body.style.backgroundImage = 'none';

  // Create a container for hacking messages
  const messageContainer = document.createElement('div');
  messageContainer.style.color = '#00ff00';
  messageContainer.style.fontFamily = 'monospace';
  messageContainer.style.padding = '20px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.marginTop = '20px';
  document.body.appendChild(messageContainer);

  // Hacking messages
  const hackingMessages = [
    'Accessing secure server...',
    'Bypassing encryption protocols...',
    'Extracting sensitive data...',
    'Operation successful!',
  ];

  // Display messages sequentially
  let index = 0;
  const interval = setInterval(() => {
    if (index < hackingMessages.length) {
      const message = document.createElement('p');
      message.textContent = hackingMessages[index];
      messageContainer.appendChild(message);
      index++;
    } else {
      clearInterval(interval);
      // Show the connected devices after messages
      setTimeout(() => {
        displayConnectedDevices();
      }, 1000);
    }
  }, 1000);
  
}

function displayConnectedDevices() {
  document.body.innerHTML = ''; // Clear previous content

  // Add the heading "Connected Devices"
  const heading = document.createElement('h1');
  heading.textContent = 'Connected Devices';
  heading.style.color = '#00ff00';
  heading.style.fontFamily = 'monospace';
  heading.style.textAlign = 'center';
  heading.style.marginTop = '20px';
  document.body.appendChild(heading);

  // Create a container for buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.flexDirection = 'column';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.marginTop = '20px';
  document.body.appendChild(buttonContainer);

  // Define button labels
  const buttons = [
    { label: '1. Samsung A50', onClick: handleFirstButtonClick },
    { label: '2. null', onClick: () => alert('No Connected Device!') },
    { label: '3. null', onClick: () => alert('No Connected Device!') },
    { label: '4. null', onClick: () => alert('No Connected Device!') },
    { label: '5. null', onClick: () => alert('No Connected Device!') },
  ];

  // Create and append buttons with "Loading..." text initially
  buttons.forEach(({ label, onClick }) => {
    const button = createStyledButton('Loading...');
    buttonContainer.appendChild(button);

    // Add the actual functionality to the button
    setTimeout(() => {
      button.textContent = label; // Replace "Loading..." with the original text
      button.onclick = onClick; // Attach the click handler
    }, 3000); // 3-second delay
  });

  // Add back button to navigate
  addBackButton(() => {
    displayAccessKeyPrompt(); // Navigate back to the Access Key page
  });
}


function createStyledButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.color = '#00ff00'; // Green text
  button.style.backgroundColor = 'black'; // Black background
  button.style.border = '2px solid #00ff00'; // Green boundary
  button.style.padding = '10px 20px';
  button.style.fontSize = '1rem';
  button.style.marginTop = '10px';
  button.style.cursor = 'pointer';
  button.style.width = '200px'; // Fixed width
  button.style.textAlign = 'center'; // Center-align text
  return button;
}

function handleFirstButtonClick() {
  document.body.innerHTML = ''; // Clear current content

  // Show loading message
  const loadingMessage = document.createElement('h2');
  loadingMessage.textContent = 'Loading...';
  loadingMessage.style.color = '#00ff00';
  loadingMessage.style.fontFamily = 'monospace';
  loadingMessage.style.textAlign = 'center';
  loadingMessage.style.marginTop = '50px';
  document.body.appendChild(loadingMessage);

  // Simulate loading for 1 second
  setTimeout(() => {
    document.body.innerHTML = ''; // Clear the loading message
    displayAvailableOptions();
  }, 1000);
}

function displayAvailableOptions() {
  document.body.innerHTML = '';
  // Add heading
  const heading = document.createElement('h1');
  heading.textContent = 'Available Options';
  heading.style.color = '#00ff00';
  heading.style.fontFamily = 'monospace';
  heading.style.textAlign = 'center';
  heading.style.marginTop = '20px';
  document.body.appendChild(heading);

  // Create a container for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.maxHeight = '70vh'; 
  buttonContainer.style.overflowY = 'auto'; // Add scroll for overflow
  buttonContainer.style.width = '90%'; // Adjust width for responsiveness
  buttonContainer.style.margin = '0 auto'; // Center the container

  buttonContainer.style.flexDirection = 'column';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.marginTop = '10px';
  document.body.appendChild(buttonContainer);

  // Options for the buttons
  const options = [
    { label: 'My Files', onClick: () => displayMyFiles() },
    { label: 'Call Log', onClick: () => displayCallLog() },
    { label: 'Contacts', onClick: () => displayContacts()},
    { label: 'Camera', onClick: () => accessCamera()},
    { label: 'Screen Casting', onClick: () => displayScreenCasting() },
    { label: 'Instagram', onClick: () => accessInstagram() },
    { label: 'WhatsApp', onClick: () => displayWhatsApp() },
    { label: 'G Pay', onClick: () => displayGPay()  },
    { label: 'Messages', onClick: () => displayMessages()},
  ];

  options.forEach(({ label, onClick }) => {
    const button = createStyledButton(label);
    button.onclick = onClick;
    buttonContainer.appendChild(button);
  });
  addBackButton(() => {

    displayConnectedDevices(); // Navigate back to the Buy Access Key page
  });
}

// Buttons functions
function displayMyFiles() {
  document.body.innerHTML = ''; // Clear current content

  // Create a loading message
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  // Simulate loading and display files
  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text

    // Call the showFiles function to display dummy folders
    const screen = document.createElement('div');
    screen.style.margin = '20px';
    screen.style.fontSize = '18px';
    screen.style.color = '#fff';
    showFiles(screen); // Pass the container to the showFiles function
    document.body.appendChild(screen);

    // Add a back button to navigate
    addBackButton(() => {
      displayAvailableOptions(); // Navigate back to the previous page
    });
  }, 500);
}

// Dummy folders with subfolders
function showFiles(screen) {
  const folders = [
    { name: "Documents", subfolders: ["Work", "Personal", "Reports"] },
    { name: "Downloads", subfolders: ["Images", "Videos", "Archives"] },
    { name: "Music", subfolders: ["Rock", "Pop", "Jazz"] },
    { name: "Pictures", subfolders: ["Vacation", "Family", "Events"] },
    { name: "Videos", subfolders: ["Movies", "Clips", "Tutorials"] },
    { name: "Android", subfolders: ["App Data", "Config", "Media"] },
    { name: "WhatsApp", subfolders: ["Images", "Videos", "Chats"] },
    { name: "DCIM", subfolders: ["Camera", "Screenshots", "Edits"] },
    { name: "Alarms", subfolders: ["Morning", "Evening", "Reminders"] },
    { name: "Movies", subfolders: ["Action", "Comedy", "Drama"] },
  ];

  screen.innerHTML = "<h3>Internal Storage</h3>";

  const folderList = document.createElement('div');
  folderList.style.display = 'flex';
  folderList.style.flexDirection = 'column';
  folderList.style.gap = '10px';

  folders.forEach((folder, index) => {
    // Create a folder row
    const folderRow = document.createElement('div');
    folderRow.style.display = 'flex';
    folderRow.style.alignItems = 'center';
    folderRow.style.cursor = 'pointer';

    // Folder icon
    const folderIcon = document.createElement('img');
    folderIcon.src = "https://img.icons8.com/fluency/48/folder-invoices.png";
    folderIcon.style.height = '20px';
    folderIcon.style.marginRight = '10px';

    // Folder name
    const folderName = document.createElement('span');
    folderName.textContent = folder.name;
    folderName.style.marginRight = '10px';

    // Subfolders container
    const subfolderContainer = document.createElement('div');
    subfolderContainer.style.display = 'none';
    subfolderContainer.style.marginLeft = '30px';
    subfolderContainer.style.flexDirection = 'column';
    subfolderContainer.style.gap = '5px';

    folder.subfolders.forEach(sub => {
      const subfolder = document.createElement('div');
      subfolder.textContent = sub;
      subfolder.style.display = 'flex';
      subfolder.style.alignItems = 'center';

      const subIcon = document.createElement('img');
      subIcon.src = "https://img.icons8.com/fluency/48/folder-invoices.png";
      subIcon.style.height = '15px';
      subIcon.style.marginRight = '10px';

      subfolder.prepend(subIcon);
      subfolderContainer.appendChild(subfolder);
    });

    // Toggle subfolders on click
    folderRow.addEventListener('click', () => {
      subfolderContainer.style.display =
        subfolderContainer.style.display === 'none' ? 'flex' : 'none';
    });

    folderRow.appendChild(folderIcon);
    folderRow.appendChild(folderName);
    folderList.appendChild(folderRow);
    folderList.appendChild(subfolderContainer);
  });

  screen.appendChild(folderList);
}








function displayCallLog() {
  document.body.innerHTML = ''; // Clear current content
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text
    const heading = document.createElement('h1');
    heading.textContent = 'Call Log';
    heading.style.color = '#00ff00';
    heading.style.textAlign = 'center';
    document.body.appendChild(heading);

    const container = document.createElement('ul');
    container.style.color = '#000'; // Black text for better readability
    container.style.listStyle = 'none';
    container.style.padding = '20px';

    const callTypes = ['missed', 'dialed', 'received']; // Call types

    for (let i = 1; i <= 50; i++) {
      const callType = callTypes[Math.floor(Math.random() * callTypes.length)]; // Random call type

      // Create a log entry
      const log = document.createElement('li');
      log.style.marginBottom = '15px';
      log.style.display = 'flex';
      log.style.alignItems = 'center';

      // Call type icon
      const icon = document.createElement('img');
      icon.style.width = '20px';
      icon.style.height = '20px';
      icon.style.marginRight = '10px';

      if (callType === 'missed') {
        icon.src = 'https://img.icons8.com/color/48/missed-call.png'; // Missed call icon
      } else if (callType === 'dialed') {
        icon.src = 'https://img.icons8.com/color/48/outgoing-call.png'; // Dialed call icon
      } else if (callType === 'received') {
        icon.src = 'https://img.icons8.com/color/48/incoming-call.png'; // Received call icon
      }

      // Call number and label
      const callText = document.createElement('span');
      callText.textContent = `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000} - ${callType.charAt(0).toUpperCase() + callType.slice(1)} Call`;
      callText.style.color = 'white';

      log.appendChild(icon);
      log.appendChild(callText);
      container.appendChild(log);
    }

    document.body.appendChild(container);
    addBackButton(() => displayAvailableOptions()); // Assuming addBackButton and displayAvailableOptions are defined
  }, 500);
}


function displayContacts() {
  document.body.innerHTML = ''; // Clear current content
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text
    const heading = document.createElement('h1');
    heading.textContent = 'Contacts';
    heading.style.color = '#00ff00';
    heading.style.textAlign = 'center';
    document.body.appendChild(heading);

    const container = document.createElement('ul');
    container.style.listStyle = 'none';
    container.style.padding = '20px';
    container.style.color = '#00ff00';

    // Array of example names
    const names = ['John', 'Alice', 'Raj', 'Priya', 'Sandeep', 'Nina', 'Ravi', 'Maya', 'Vikram', 'Meera', 'Amit', 'Simran', 'Shiv', 'Isha', 'Karan', 'Tanu', 'Rohit', 'Geeta', 'Vani', 'Neha', 'Ravi', 'Lalit', 'Rhea', 'Sonia', 'Tarun', 'Harish'];

    for (let i = 1; i <= 50; i++) {
      const contact = document.createElement('li');
      contact.style.marginBottom = '10px';
      contact.style.cursor = 'pointer'; // Show pointer cursor on hover

      // Display name only
      const contactName = document.createElement('span');
      contactName.textContent = `${names[i % names.length]} ${i}`; // Randomly assigned name and index
      contactName.style.color = 'white'; // Set name text color to white

      // When clicked, show the contact number
      contactName.addEventListener('click', () => {
        const phoneNumber = `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`; // Random Indian number
        contactName.textContent = `${names[i % names.length]} ${i} - ${phoneNumber}`;
      });

      contact.appendChild(contactName);
      container.appendChild(contact);
    }

    document.body.appendChild(container);
    addBackButton(() => {
      displayAvailableOptions(); // Navigate back to the Buy Access Key page
    });
  }, 500);
}


function accessCamera() {
  document.body.innerHTML = ''; // Clear current content
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text
    const video = document.createElement('video');
    video.autoplay = true;
    video.style.width = '100%';
    video.style.height = 'auto';
    document.body.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        alert('Unable to access camera: ' + err.message);
      });

      addBackButton(() => {

        displayAvailableOptions(); // Navigate back to the Buy Access Key page
      });
  }, 500);
}

function displayScreenCasting() {
  document.body.innerHTML = ''; // Clear current content
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text
    const heading = document.createElement('h1');
    heading.textContent = 'Screen Casting';
    heading.style.color = '#00ff00';
    heading.style.textAlign = 'center';
    document.body.appendChild(heading);

    const screen = document.createElement('div');
    screen.style.backgroundColor = 'black';
    screen.style.border = '2px solid #00ff00';
    screen.style.width = '300px';
    screen.style.height = '600px';
    screen.style.margin = '20px auto';
    screen.style.position = 'relative';
    screen.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78e6531f-e3f4-4dbc-af68-fdc6eb509f67/dg3cenp-ff24f6c7-80ac-4218-afb3-08a641806289.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4ZTY1MzFmLWUzZjQtNGRiYy1hZjY4LWZkYzZlYjUwOWY2N1wvZGczY2VucC1mZjI0ZjZjNy04MGFjLTQyMTgtYWZiMy0wOGE2NDE4MDYyODkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jUPWgruwoP9Ouk9sEfmeMcYB6bx0qTfTsuTdSoAZS2o)'; // Ghost Rider wallpaper
    screen.style.backgroundSize = 'cover'; // Ensure the image covers the entire screen
    screen.style.backgroundPosition = 'center'; // Center the image

    // App Icons
    const appIcons = [
      { name: 'WhatsApp', img: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584845.jpg", link: 'https://www.whatsapp.com' },
      { name: 'Instagram', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', link: 'https://www.instagram.com' },
      { name: 'Netflix', img: 'https://w7.pngwing.com/pngs/746/404/png-transparent-netflix-thumbnail.png', link: 'https://www.netflix.com' },
      { name: 'Messages', img: 'https://w7.pngwing.com/pngs/169/794/png-transparent-ios-message-icon-iphone-message-computer-icons-text-messaging-messenger-electronics-grass-mobile-phones-thumbnail.png', link: 'https://messages.google.com' },
      { name: 'Google Play', img: 'https://w7.pngwing.com/pngs/263/349/png-transparent-google-play-logo-google-play-app-store-google-thumbnail.png', link: 'https://play.google.com' },
      { name: 'Gaming Hub', img: 'https://w7.pngwing.com/pngs/770/901/png-transparent-game-launcher-game-interface-play-menu-button-3d-icon-thumbnail.png', link: 'https://play.google.com/store/apps/details?id=com.google.android.play.games' },
      { name: 'Free Fire Max', img: 'https://play-lh.googleusercontent.com/FwHFuObCEVZzadQXB0klEtby8rHVV7ztHNld7a1HRBqu_TA_whj81jHzjOcWC7x52pY', link: 'https://www.freefiremax.com' },
      { name: 'Telegram', img: 'https://w7.pngwing.com/pngs/284/690/png-transparent-telegram-logo-computer-icons-telegram-logo-blue-angle-triangle-thumbnail.png', link: 'https://telegram.org' },
      { name: 'Twitter', img: 'https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo-thumbnail.png', link: 'https://twitter.com' },
      { name: 'YouTube', img: 'https://w7.pngwing.com/pngs/963/811/png-transparent-youtube-logo-youtube-red-logo-computer-icons-youtube-television-angle-rectangle-thumbnail.png', link: 'https://www.youtube.com' }
    ];

    // Create app icons
    appIcons.forEach((app, index) => {
      const appIconContainer = document.createElement('div');
      appIconContainer.style.textAlign = 'center';
      appIconContainer.style.marginBottom = '10px';
      appIconContainer.style.display = 'inline-block';
      appIconContainer.style.width = '50px';
      appIconContainer.style.height = '50px';
      appIconContainer.style.margin = '10px';

      const appIcon = document.createElement('img');
      appIcon.src = app.img;
      appIcon.alt = app.name;
      appIcon.style.width = '100%';
      appIcon.style.height = '100%';
      appIcon.style.borderRadius = '10px';
      appIcon.style.cursor = 'pointer'; // Make it clickable
      appIcon.title = app.name;

      // Add click event to open the app's URL in a new tab
      appIcon.addEventListener('click', () => {
        window.open(app.link, '_blank');
      });

      appIconContainer.appendChild(appIcon);
      screen.appendChild(appIconContainer);
    });

    // Add dots animation
    const dots = document.createElement('div');
    dots.textContent = '⋯';
    dots.style.position = 'absolute';
    dots.style.bottom = '10px';
    dots.style.width = '100%';
    dots.style.textAlign = 'center';
    dots.style.color = '#00ff00';
    dots.style.fontSize = '1.5rem';
    dots.style.animation = 'bounce 1s infinite'; // Animation added

    screen.appendChild(dots);
    document.body.appendChild(screen);

    // Add keyframes for animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);

    addBackButton(() => {
      displayAvailableOptions(); // Navigate back to the Buy Access Key page
    });
  }, 500);
}




// Function to handle Instagram button click
function accessInstagram() {
  // Clear everything on the page
  document.body.innerHTML = '';

  // Create the phone display frame
  const phoneFrame = document.createElement('div');
  phoneFrame.style.width = '375px'; // Typical phone screen width
  phoneFrame.style.height = '667px'; // Typical phone screen height
  phoneFrame.style.border = '10px solid green'; // Green boundaries
  phoneFrame.style.borderRadius = '20px'; // Rounded edges
  phoneFrame.style.overflow = 'hidden'; // Prevent content overflow
  phoneFrame.style.margin = '50px auto'; // Center it on the page
  phoneFrame.style.backgroundColor = '#000'; // Black background for hacking theme
  phoneFrame.style.color = '#00ff00'; // Green text for hacking effect
  phoneFrame.style.fontFamily = 'monospace';
  phoneFrame.style.padding = '20px';
  phoneFrame.style.display = 'flex';
  phoneFrame.style.flexDirection = 'column';
  phoneFrame.style.justifyContent = 'center';
  phoneFrame.style.alignItems = 'center';
  document.body.appendChild(phoneFrame);

  // Hacking messages
  const hackingMessages = [
    'Checking system...',
    'Accessing Instagram...',
    'Fetching username...',
    'Fetching password...',
  ];

  // Create an element to display hacking messages
  const hackingText = document.createElement('div');
  hackingText.style.textAlign = 'center';
  phoneFrame.appendChild(hackingText);

  let messageIndex = 0;

  // Display messages one by one every second
  const interval = setInterval(() => {
    if (messageIndex < hackingMessages.length) {
      hackingText.textContent = hackingMessages[messageIndex];
      messageIndex++;
    } else {
      clearInterval(interval);

      // After 5 seconds, display the credentials
      hackingText.textContent = ''; // Clear hacking messages

      const username = document.createElement('p');
      username.textContent = `Username: nhi btauga`;

      const password = document.createElement('p');
      password.textContent = `Password: nikal`;

      hackingText.appendChild(username);
      hackingText.appendChild(password);
      addBackButton(() => {
        displayAvailableOptions(); // Navigate back to the Buy Access Key page
      });
    }
  }, 1000); // 1-second 
  
}




function displayGPay() {
  document.body.innerHTML = ''; // Clear current content
  const loadingText = document.createElement('h2');
  loadingText.textContent = 'Loading...';
  loadingText.style.color = '#00ff00';
  loadingText.style.textAlign = 'center';
  loadingText.style.marginTop = '50px';
  document.body.appendChild(loadingText);

  setTimeout(() => {
    document.body.innerHTML = ''; // Clear loading text
    const heading = document.createElement('h1');
    heading.textContent = 'Google Pay';
    heading.style.color = '#00ff00';
    heading.style.textAlign = 'center';
    document.body.appendChild(heading);

    const message = document.createElement('p');
    message.textContent = 'This is a fake Google Pay interface.';
    message.style.color = '#00ff00';
    message.style.textAlign = 'center';
    message.style.marginTop = '20px';
    document.body.appendChild(message);

    addBackButton(() => {

      displayAvailableOptions(); // Navigate back to the Buy Access Key page
    });
  }, 500);
}

function displayWhatsApp() {
  // Clear everything on the page
  document.body.innerHTML = '';

  // Create the phone display frame
  const phoneFrame = document.createElement('div');
  phoneFrame.style.width = '375px'; // Typical phone screen width
  phoneFrame.style.height = '667px'; // Typical phone screen height
  phoneFrame.style.border = '10px solid green'; // Green boundaries
  phoneFrame.style.borderRadius = '20px'; // Rounded edges
  phoneFrame.style.overflow = 'hidden'; // Prevent content overflow
  phoneFrame.style.margin = '50px auto'; // Center it on the page
  phoneFrame.style.backgroundColor = '#000'; // White background
  phoneFrame.style.fontFamily = 'monospace';
  phoneFrame.style.padding = '20px';
  phoneFrame.style.display = 'flex';
  phoneFrame.style.flexDirection = 'column';
  phoneFrame.style.justifyContent = 'flex-start';
  document.body.appendChild(phoneFrame);

  // Sidebar for chats (left side)
  const chatSidebar = document.createElement('div');
  chatSidebar.style.width = '100%';
  chatSidebar.style.height = '100%';
  chatSidebar.style.backgroundColor = '#f0f0f0'; // Sidebar background
  chatSidebar.style.overflowY = 'auto';
  chatSidebar.style.padding = '10px';

  // Example chat list with images
  const chatList = [
      { name: 'MOM', message: 'This message was deleted.', time: 'Yesterday', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Badal', message: 'Koi gll nhi pra', time: '05/12/2024', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Rohini (You)', message: 'meet.google.com/wrd-ygad-bna', time: '05/12/2024', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Discussion', message: 'Vinay 2: Thora late ho jaega', time: '05/12/2024', imageUrl: 'https://via.placeholder.com/50' },
      { name: 'Desh ka yuvaa', message: 'EDC-VK mehta.pdf', time: '05/12/2024', imageUrl: 'https://via.placeholder.com/50' }
  ];

  chatList.forEach(chat => {
      const chatItem = document.createElement('div');
      chatItem.style.padding = '10px';
      chatItem.style.marginBottom = '5px';
      chatItem.style.borderBottom = '1px solid #ccc';
      chatItem.style.cursor = 'pointer';
      chatItem.style.display = 'flex';
      chatItem.style.alignItems = 'center';

      chatItem.addEventListener('mouseover', () => {
          chatItem.style.backgroundColor = '#e9e9e9';
      });

      chatItem.addEventListener('mouseout', () => {
          chatItem.style.backgroundColor = '';
      });

      const image = document.createElement('img');
      image.src = chat.imageUrl;
      image.alt = `${chat.name}'s Avatar`;
      image.style.width = '40px';
      image.style.height = '40px';
      image.style.borderRadius = '50%';
      image.style.marginRight = '10px';

      const textContainer = document.createElement('div');
      const name = document.createElement('strong');
      name.innerText = chat.name;
      name.style.marginBottom = '5px';

      const message = document.createElement('span');
      message.innerText = chat.message;
      message.style.color = '#555';
      message.style.fontSize = '14px';

      const time = document.createElement('span');
      time.innerText = chat.time;
      time.style.color = '#999';
      time.style.fontSize = '12px';
      time.style.marginTop = '5px';

      textContainer.appendChild(name);
      textContainer.appendChild(message);
      textContainer.appendChild(time);

      chatItem.appendChild(image);
      chatItem.appendChild(textContainer);
      chatSidebar.appendChild(chatItem);
  });

  // Add the chatSidebar to the phone frame
  phoneFrame.appendChild(chatSidebar);

  // Add back button (optional if you need a back button to go somewhere)
  addBackButton(() => {
      displayAvailableOptions(); // Navigate back to the Buy Access Key page
  });
}



// Example back button function



function displayMessages() {
  document.body.innerHTML = ''; // Clear current content

  // Create mobile frame with green boundaries
  const phoneFrame = document.createElement('div');
  phoneFrame.style.width = '375px'; // Typical phone screen width
  phoneFrame.style.height = '667px'; // Typical phone screen height
  phoneFrame.style.border = '10px solid green'; // Green boundaries
  phoneFrame.style.borderRadius = '20px'; // Rounded edges
  phoneFrame.style.overflow = 'hidden'; // Prevent content overflow
  phoneFrame.style.margin = '50px auto'; // Center it on the page
  phoneFrame.style.backgroundColor = 'black'; // White background
  phoneFrame.style.fontFamily = 'monospace';
  phoneFrame.style.padding = '20px';
  phoneFrame.style.display = 'flex';
  phoneFrame.style.flexDirection = 'column';
  phoneFrame.style.justifyContent = 'flex-start';
  document.body.appendChild(phoneFrame);

  // Add a heading inside the mobile frame
  const heading = document.createElement('h1');
  heading.textContent = 'Messages';
  heading.style.color = '#00ff00';
  heading.style.textAlign = 'center';
  phoneFrame.appendChild(heading);

  const container = document.createElement('ul');
  container.style.color = '#00ff00';
  container.style.listStyle = 'none';
  container.style.padding = '10px';

  // Sample company names for headers
  const companies = ['Airtel', 'Vodafone', 'Jio', 'Idea', 'BSNL', 'MTNL', 'Tata Indicom', 'Aircel', 'Reliance', 'Sify'];

  for (let i = 1; i <= 20; i++) {
    const messageItem = document.createElement('li');
    messageItem.style.marginBottom = '15px';

    // Create the company header
    const companyName = document.createElement('strong');
    companyName.textContent = companies[i % companies.length];
    companyName.style.display = 'block';
    companyName.style.fontSize = '18px';
    companyName.style.marginBottom = '5px';
    companyName.style.color = '#00ff00';

    // Create the message content
    const messageContent = document.createElement('span');
    messageContent.textContent = `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000} - Your message ${i} from ${companyName.textContent}`;
    messageContent.style.color = '#00ff00';
    messageContent.style.fontSize = '14px';

    // Append company name and message content to message item
    messageItem.appendChild(companyName);
    messageItem.appendChild(messageContent);
    container.appendChild(messageItem);
  }

  phoneFrame.appendChild(container);

  // Add back button
  addBackButton(() => {
    displayAvailableOptions(); // Navigate back to the Buy Access Key page
  });
}










// Function to handle the "Buy Access Key" button click
function buyAccessKey() {
  document.body.innerHTML = ''; // Clear current content

  // Instead of displaying QR code immediately, we first display the plan options
  displayPlanOptions();
}

/// Global variable to store the selected plan amount
let selectedPlanAmount = '9,999'; // Default value if no plan is selected

// Function to display radio buttons for plan selection
function displayPlanOptions() {
  document.body.innerHTML = ''; // Clear the page content

  // Create a centered container
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';
  container.style.backgroundColor = 'black';
  container.style.color = 'white';
  container.style.padding = '20px';
  container.style.borderRadius = '10px';
  container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
  document.body.appendChild(container);

  // Heading for the plan options
  const heading = document.createElement('h2');
  heading.textContent = 'Select Your Plan';
  heading.style.marginBottom = '20px';
  container.appendChild(heading);

  // Create the radio buttons
  const plans = [
    { label: 'Monthly Plan (199$)', value: '199$' },
    { label: 'Yearly Plan (1999$)', value: ' 1999$' },
  ];

  plans.forEach((plan) => {
    const label = document.createElement('label');
    label.textContent = plan.label;
    label.style.display = 'block';
    label.style.marginBottom = '10px';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'plan';
    radio.value = plan.value;
    radio.style.marginRight = '10px';

    // Update the selected plan amount when the user selects a plan
    radio.onclick = () => {
      selectedPlanAmount = plan.value;
    };

    label.prepend(radio);
    container.appendChild(label);
  });

  // Back Button
  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.style.padding = '10px 20px';
  backButton.style.fontSize = '1rem';
  backButton.style.backgroundColor = '#00ffcc';
  backButton.style.color = '#000';
  backButton.style.border = 'none';
  backButton.style.cursor = 'pointer';
  backButton.style.marginRight = '10px';
  backButton.onclick = displayAccessKeyPrompt; // Reset the page to the initial state
  container.appendChild(backButton);

  // Continue Button
  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue';
  continueButton.style.padding = '10px 20px';
  continueButton.style.fontSize = '1rem';
  continueButton.style.backgroundColor = '#00ffcc';
  continueButton.style.color = '#000';
  continueButton.style.border = 'none';
  continueButton.style.cursor = 'pointer';
  continueButton.style.marginLeft = '10px';

  continueButton.onclick = () => {
    // Once a plan is selected, proceed to the QR code page
    displayQrPage();
  };
  container.appendChild(continueButton);
}

// Function to display the QR code page
// Function to display the QR code page
function displayQrPage() {
  document.body.innerHTML = ''; // Clear the page content

  // Create a container for the QR code and instructions
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '40%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';
  document.body.appendChild(container);

  // Create and display the QR code
  const qrCode = document.createElement('img');
  qrCode.src = 'qr.png.jpeg'; // QR code path
  qrCode.alt = 'QR Code';
  qrCode.style.width = '150px'; // Adjust the size of the QR code
  qrCode.style.marginBottom = '20px';
  container.appendChild(qrCode);
  

  // Create and display the payment instruction with a black box
  const paymentInstruction = document.createElement('p');
  paymentInstruction.textContent = `Pay ${selectedPlanAmount} to get Access Key`;
  paymentInstruction.style.color = '#00ff00';
  paymentInstruction.style.backgroundColor = 'black';
  paymentInstruction.style.padding = '10px';
  paymentInstruction.style.margin = '20px 0';
  paymentInstruction.style.fontSize = '1.2rem';
  container.appendChild(paymentInstruction);


  // Create and display the "Download QR" button (move it a bit to the left)
  const downloadQrButton = document.createElement('button');
  downloadQrButton.textContent = 'Download QR';
  downloadQrButton.style.padding = '10px 20px';
  downloadQrButton.style.fontSize = '1rem';
  downloadQrButton.style.backgroundColor = '#00ffcc';
  downloadQrButton.style.color = '#000';
  // Adjust "Download QR" Button
  downloadQrButton.style.position = 'static';
  downloadQrButton.style.left = '20%'; // Move it further to the left
  downloadQrButton.style.top = '80%'; // Adjust vertical position  
  downloadQrButton.style.border = 'none';
  downloadQrButton.style.margin = '20px 20px 0 0';
  downloadQrButton.style.cursor = 'pointer';
  downloadQrButton.style.marginTop = '20px';
  downloadQrButton.style.marginLeft = '0px';  // Move it slightly to the left
  downloadQrButton.onclick = () => {
    const link = document.createElement('a');
    link.href = qrCode.src;
    link.download = 'qr.png'; // Download as 'qr.png'
    link.click();
  };
  container.appendChild(downloadQrButton);

  // Create and display the "I Have Paid" button
  const iHavePaidButton = document.createElement('button');
  iHavePaidButton.textContent = 'I Have Paid';
  iHavePaidButton.style.padding = '10px 20px';
  iHavePaidButton.style.fontSize = '1rem';
  iHavePaidButton.style.backgroundColor = '#00ffcc';
  iHavePaidButton.style.color = '#000';
  iHavePaidButton.style.border = 'none';
  iHavePaidButton.style.margin = '20px 0 0 20px'; 
  // Adjust "I Have Paid" Button
  iHavePaidButton.style.position = 'static';
  iHavePaidButton.style.right = '20%'; // Move it further to the right
  iHavePaidButton.style.top = '80%'; // Adjust vertical position  
  iHavePaidButton.style.cursor = 'pointer';
  iHavePaidButton.style.marginTop = '20px';
  iHavePaidButton.style.marginRight = '0px';
  iHavePaidButton.onclick = () => {
    displayUtrValidationPage();
  };
  
  // Function to display the UTR validation page
  function displayUtrValidationPage() {
    document.body.innerHTML = ''; // Clear the page content
  
    // Create a centered container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '40%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.textAlign = 'center';
    document.body.appendChild(container);
  
    // Input box for TX HASH/Transaction ID
    const label = document.createElement('h2');
    label.textContent = 'Enter Hash TX ID';
    label.style.color = '#00ff00';
    label.style.marginBottom = '20px';
    container.appendChild(label);
  
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Paste TX ID';
    inputBox.style.padding = '10px';
    inputBox.style.marginBottom = '20px';
    inputBox.style.border = '1px solid #00ff00';
    inputBox.style.borderRadius = '5px';
    inputBox.style.width = '300px';
    inputBox.style.color = '#00ff00';
    inputBox.style.backgroundColor = 'black';
    container.appendChild(inputBox);
  
    // Validate Button
    const validateButton = document.createElement('button');
    validateButton.textContent = 'Validate';
    validateButton.style.padding = '10px 20px';
    validateButton.style.fontSize = '1rem';
    validateButton.style.backgroundColor = '#00ffcc';
    validateButton.style.color = '#000';
    validateButton.style.border = 'none';
    validateButton.style.cursor = 'pointer';
    validateButton.style.marginTop = '20px';
    validateButton.onclick = () => {
      validateTransactionId(inputBox.value, container, inputBox, validateButton);
    };
    container.appendChild(validateButton);
    addHelpButton()
  
    addBackButton(() => {

      displayAccessKeyPrompt(); // Navigate back to the Buy Access Key page
    });
  }
  
  // Function to validate the entered UTR/Transaction ID
  function validateTransactionId(enteredId, container, inputBox, validateButton) {
    if (!/^\d{12}$/.test(enteredId)) {
      alert('Please enter a valid TX ID.');
      return;
    }
  
    validateButton.textContent = 'Validating...'; // Show loading text
    validateButton.disabled = true;
  
    setTimeout(() => {
      if (enteredId === '112233445566') {
        validateButton.remove(); // Remove the Validate button
  
        // Create "Get Access Key" button
        const accessKeyButton = document.createElement('button');
        accessKeyButton.textContent = 'Get Access Key';
        accessKeyButton.style.padding = '10px 20px';
        accessKeyButton.style.fontSize = '1rem';
        accessKeyButton.style.backgroundColor = '#00ffcc';
        accessKeyButton.style.color = '#000';
        accessKeyButton.style.border = 'none';
        accessKeyButton.style.cursor = 'pointer';
        accessKeyButton.style.marginTop = '20px';
  
        accessKeyButton.onclick = () => {
          generatedAccessKey = generateAccessKey(); 
          saveAccessKeyToStorage(generatedAccessKey);// Generate and store the access key
          displayAccessKey(container); // Display the generated key
        };
  
        container.appendChild(accessKeyButton);
      } else {
        alert('Invalid TXN ID. Please try again.');
        validateButton.textContent = 'Validate';
        validateButton.disabled = false;
      }
    }, 2000);
  }
  
  // Function to generate a dummy access key
  function generateAccessKey() {
    return Math.random().toString(36).substr(2, 10).toUpperCase();
  }
  
  let generatedAccessKey = null; // Initialize it to null or empty

  function displayAccessKey(container) {
    container.innerHTML = ''; // Clear previous content
  
    const keyMessage = document.createElement('h2');
    keyMessage.textContent = 'Your Access Key is:';
    keyMessage.style.color = '#00ff00';
    keyMessage.style.marginBottom = '20px';
    container.appendChild(keyMessage);
  
    generatedAccessKey = generateAccessKey();
    saveAccessKeyToStorage(generatedAccessKey); // Generate and store the access key
  
    const keyDisplay = document.createElement('div');
    keyDisplay.textContent = generatedAccessKey;
    keyDisplay.style.color = '#00ffcc';
    keyDisplay.style.backgroundColor = 'black';
    keyDisplay.style.padding = '10px';
    keyDisplay.style.marginBottom = '20px';
    keyDisplay.style.fontSize = '1.5rem';
    keyDisplay.style.border = '1px solid #00ff00';
    keyDisplay.style.borderRadius = '5px';
    container.appendChild(keyDisplay);
    addHelpButton()
  
    
    addBackButton(() => {
      displayAccessKeyPrompt(); // Navigate back to the Buy Access Key page
    });
  }

  
     

  
  
  
  
    container.appendChild(iHavePaidButton);
    
    // Create and display the message box
    const messageBox = document.createElement('div');
    messageBox.style.backgroundColor = 'black';
    messageBox.style.color = '#00ff00';
    messageBox.style.padding = '15px';
    messageBox.style.marginTop = '30px';
    messageBox.style.fontSize = '1rem';
    messageBox.style.textAlign = 'center';
    messageBox.style.borderRadius = '5px';
    messageBox.style.paddingBottom = '20px'
    messageBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    messageBox.textContent = 'Once you have completed your payment, Please click on the "I Have Paid" button to proceed.';
    container.appendChild(messageBox);
    addHelpButton()

    addBackButton(() => {

      displayAccessKeyPrompt(); // Navigate back to the Buy Access Key page
    });

  

  
}



// This CDN script dynamicaly personalize used for automation on different web pages, platforms, and applications.
// Author: Don McLin D. Diaz
// Date: 21-06-2025
// Version: 0.0.1

// Initiate hotkeys for keyboard shortcuts
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;
  const alt = event.altKey;

  switch (true) {
    case alt && key === 's':
      event.preventDefault();
      console.log('Ctrl + S was pressed (Save)');
      break;
  }
});

// JQuery Link https://releases.jquery.com/
const jQueryData = {
    "jQueryVersion":"3.7.1",
    "jQueryIntegrity":"sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=",
    "jQueryCrossOrigin":"anonymous"
};

// Functions code.
// Load jQuery from CDN only if it's not already loaded
function loadJquery() {
    // Check if jQuery is already loaded
  if (typeof jQuery === 'undefined') {
    // Create a script element to load jQuery
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.integrity = jQueryData.jQueryIntegrity;
    script.crossOrigin = jQueryData.jQueryCrossOrigin;
    script.src = `https://code.jquery.com/jquery-${jQueryData.jQueryVersion}.js`;
    // Append the script to the document head
    script.onload = () => {
      console.log('jQuery loaded');
    };
    // Handle script loading errors
    script.onerror = () => {
      console.error('Failed to load jQuery');
    };
    document.head.appendChild(script);
  }
}
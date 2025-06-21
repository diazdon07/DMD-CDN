// This CDN script dynamicaly personalize used for automation on different web pages, platforms, and applications.
// Author: Don McLin D. Diaz
// Date: 21-06-2025
// Version: 0.0.1

hotkeys.register('alt+s', function(e) {
  e.preventDefault(); // Prevent default browser action
  console.log('Hotkey Alt+E pressed');
  // Add your custom functionality here, e.g., save data, trigger an event, etc.
});

// JQuery Link https://releases.jquery.com/
const jQueryData = {
    "jQueryVersion":"3.7.1",
    "jQueryIntegrity":"sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=",
    "jQueryCrossOrigin":"anonymous"
};

// Functions code.
// Hotkeys system
function initHotkeys() {
  // Object to store registered hotkey combinations and their corresponding callbacks
  const hotkeys = {};

  // Converts a keyboard event into a standardized key combination string (e.g., "ctrl+shift+s")
  function normalizeEventKey(e) {
    const keys = [];
    if (e.ctrlKey) keys.push('ctrl');
    if (e.shiftKey) keys.push('shift');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');
    keys.push(e.key.toLowerCase()); // Add the actual key pressed
    return keys.join('+');
  }

  // Event handler for keydown events
  function handler(e) {
    const combo = normalizeEventKey(e); // Normalize the key combination
    if (hotkeys[combo]) {
      e.preventDefault(); // Prevent default browser action (e.g., save dialog)
      hotkeys[combo](e);  // Call the registered callback
    }
  }

  // Register the keydown event listener
  // This captures all keydown events on the document and delegates to the handler
  $(document).on('keydown', handler);

  // Expose the hotkeys API globally
  window.hotkeys = {
    // Register a hotkey and its callback
    register: function (combo, callback) {
      hotkeys[combo.toLowerCase()] = callback;
    },
    // Unregister a previously registered hotkey
    unregister: function (combo) {
      delete hotkeys[combo.toLowerCase()];
    },
    // Clear all registered hotkeys
    clearAll: function () {
      for (const k in hotkeys) delete hotkeys[k];
    }
  };
}
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

// Initialize functions
loadJquery(initHotkeys);
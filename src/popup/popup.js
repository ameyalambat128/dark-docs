/**
 * Dark Docs 2.0 Chrome Extension - Popup Controller
 * Compact modern design with animated icons
 */

document.addEventListener('DOMContentLoaded', function () {
  const toggleElement = document.getElementById('toggle_checkbox');
  const themeIcon = document.getElementById('theme-icon');

  // Storage key matching content script
  const STORAGE_KEY = 'dark_mode_enabled';

  // Initialize popup state
  function initializePopup() {
    chrome.storage.local.get([STORAGE_KEY], function (result) {
      const isEnabled = result[STORAGE_KEY] !== false; // Default to enabled
      toggleElement.checked = isEnabled;
      updateThemeIcon(isEnabled);
    });
  }

  // Update theme icon based on toggle state
  function updateThemeIcon(isEnabled) {
    if (isEnabled) {
      themeIcon.classList.add('enabled');
    } else {
      themeIcon.classList.remove('enabled');
    }
  }

  // Handle toggle change
  function handleToggleChange() {
    const isChecked = toggleElement.checked;

    // Update icon immediately for smooth UX
    updateThemeIcon(isChecked);

    // Send message to content script to toggle
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: 'toggle_dark_mode' },
          function (response) {
            if (chrome.runtime.lastError) {
              // Tab might not have the content script loaded
              console.log(
                'Message sending failed - this is normal for non-Google Docs tabs'
              );
              return;
            }

            if (response && response.success) {
              // Update icon to match actual state
              toggleElement.checked = response.enabled;
              updateThemeIcon(response.enabled);
            }
          }
        );
      }
    });
  }

  // Event listeners
  toggleElement.addEventListener('change', handleToggleChange);

  // Initialize the popup
  initializePopup();
});

/**
 * Dark Docs 2.0 Chrome Extension - Popup Controller
 * Compact modern design with animated icons
 */

document.addEventListener('DOMContentLoaded', function () {
  const toggleElement = document.getElementById('toggle_checkbox');

  // Check if toggle element exists
  if (!toggleElement) {
    // eslint-disable-next-line no-console
    console.error('Toggle checkbox element not found');
    return;
  }

  // Storage key matching content script
  const STORAGE_KEY = 'dark_mode_enabled';

  // Get icon elements with null checking
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  const iconLeft = document.querySelector('.icon-left');
  const iconRight = document.querySelector('.icon-right');

  // Update theme icons based on state
  function updateThemeIcon(isDarkMode) {
    try {
      if (moonIcon && moonIcon.classList) {
        if (isDarkMode) {
          moonIcon.classList.add('active');
        } else {
          moonIcon.classList.remove('active');
        }
      }

      if (sunIcon && sunIcon.classList) {
        if (isDarkMode) {
          sunIcon.classList.remove('active');
        } else {
          sunIcon.classList.add('active');
        }
      }

      if (iconLeft && iconLeft.classList) {
        if (isDarkMode) {
          iconLeft.classList.remove('active');
        } else {
          iconLeft.classList.add('active');
        }
      }

      if (iconRight && iconRight.classList) {
        if (isDarkMode) {
          iconRight.classList.add('active');
        } else {
          iconRight.classList.remove('active');
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating theme icons:', error);
    }
  }

  // Initialize popup state
  function initializePopup() {
    // Get version from manifest
    const manifest = chrome.runtime.getManifest();
    const versionDisplay = document.getElementById('version-display');
    if (versionDisplay && manifest.version) {
      versionDisplay.textContent = `V ${manifest.version}`;
    }

    chrome.storage.local.get([STORAGE_KEY], function (result) {
      const isEnabled = result[STORAGE_KEY] !== false; // Default to enabled
      if (toggleElement) {
        toggleElement.checked = isEnabled;
        updateThemeIcon(isEnabled);
      }
    });
  }

  // Handle toggle change
  function handleToggleChange() {
    if (!toggleElement) {
      // eslint-disable-next-line no-console
      console.error('Toggle element not available');
      return;
    }
    const isChecked = toggleElement.checked;

    // Update icons immediately for better UX
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
              // eslint-disable-next-line no-console
              console.log(
                'Message sending failed - this is normal for non-Google Docs tabs'
              );
              return;
            }

            if (response && response.success && toggleElement) {
              // Update toggle to match actual state
              toggleElement.checked = response.enabled;
              updateThemeIcon(response.enabled);
            }
          }
        );
      }
    });
  }

  // Event listeners
  if (toggleElement) {
    toggleElement.addEventListener('change', handleToggleChange);
  }

  // Initialize the popup
  initializePopup();
});

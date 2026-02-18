/**
 * Hookmark Integration Utility
 *
 * Manages settings for auto-linking saved plans to project folders via Hookmark.
 * Hookmark is macOS-only; the server-side integration silently skips on other platforms.
 */

import { storage } from './storage';

const STORAGE_KEY_ENABLED = 'plannotator-hookmark-enabled';

/**
 * Hookmark integration settings
 */
export interface HookmarkSettings {
  enabled: boolean;
}

/**
 * Get current Hookmark settings from storage
 */
export function getHookmarkSettings(): HookmarkSettings {
  return {
    enabled: storage.getItem(STORAGE_KEY_ENABLED) === 'true',
  };
}

/**
 * Save Hookmark settings to storage
 */
export function saveHookmarkSettings(settings: HookmarkSettings): void {
  storage.setItem(STORAGE_KEY_ENABLED, String(settings.enabled));
}

import React, { useState } from 'react';
import { Bell, Mail, Shield, Palette } from 'lucide-react';

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: 'en',
    timezone: 'UTC-8'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <div className="section-header">
            <Mail size={20} />
            <h2>Email Preferences</h2>
          </div>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
              />
              Receive email notifications
            </label>
          </div>
          <div className="setting-item">
            <label>Email Frequency</label>
            <select className="setting-select">
              <option value="immediate">Immediate</option>
              <option value="daily">Daily Digest</option>
              <option value="weekly">Weekly Summary</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Bell size={20} />
            <h2>Notification Settings</h2>
          </div>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.pushNotifications}
                onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
              />
              Enable push notifications
            </label>
          </div>
          <div className="setting-item">
            <label>Notification Types</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" defaultChecked /> New Applications
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Event Updates
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Program Changes
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Palette size={20} />
            <h2>Appearance</h2>
          </div>
          <div className="setting-item">
            <label>Language</label>
            <select
              className="setting-select"
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Timezone</label>
            <select
              className="setting-select"
              value={settings.timezone}
              onChange={(e) => handleSettingChange('timezone', e.target.value)}
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Shield size={20} />
            <h2>Security Settings</h2>
          </div>
          <div className="setting-item">
            <button className="button button-secondary">Change Password</button>
          </div>
          <div className="setting-item">
            <button className="button button-secondary">Two-Factor Authentication</button>
          </div>
          <div className="setting-item">
            <button className="button button-secondary">Manage API Keys</button>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="button button-primary">Save Changes</button>
        <button className="button button-secondary">Reset to Defaults</button>
      </div>
    </div>
  );
}

export default Settings;
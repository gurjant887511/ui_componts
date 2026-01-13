// Debug script - add this to browser console
console.log('=== APP DEBUG ===');
console.log('Current URL:', window.location.href);
console.log('localStorage:', {
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  userInfo: localStorage.getItem('userInfo'),
  token: localStorage.getItem('token') ? '✓ SET' : 'NOT SET'
});

// Test API connection
fetch('http://localhost:5000/api/components')
  .then(r => r.json())
  .then(d => console.log('API response:', d.length, 'components'))
  .catch(e => console.error('API ERROR:', e.message));

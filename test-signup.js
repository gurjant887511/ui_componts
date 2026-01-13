import fetch from 'node-fetch';

async function testSignup() {
  try {
    const testEmail = `test-${Date.now()}@gmail.com`;
    const testData = {
      name: 'Test User',
      email: testEmail,
      password: 'Test123',
      confirmPassword: 'Test123'
    };

    console.log('📝 Testing signup with:', testData);

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });

    const data = await response.json();
    console.log('✅ Signup response:', data);

    // Now check database
    console.log('\n⏳ Checking database (waiting 2s)...');
    await new Promise(r => setTimeout(r, 2000));

    const checkResponse = await fetch(`http://localhost:5000/api/auth/debug-otp/${encodeURIComponent(testEmail)}`);
    const dbData = await checkResponse.json();
    console.log('📊 Database data:', dbData);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testSignup();

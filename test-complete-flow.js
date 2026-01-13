import { spawn } from 'child_process';
import { readFileSync } from 'fs';

async function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function testCompleteFlow() {
  console.log('🚀 Starting Complete Signup & OTP Flow Test\n');
  
  const testEmail = `test-${Date.now()}@gmail.com`;
  const testPassword = 'Test123456';
  const testName = 'Test User';

  try {
    // Step 1: Signup
    console.log('📝 Step 1: Sending signup request...');
    console.log(`   Email: ${testEmail}`);
    console.log(`   Password: ${testPassword}`);
    console.log(`   Name: ${testName}\n`);

    let signupResponse = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: testName,
        email: testEmail,
        password: testPassword,
        confirmPassword: testPassword
      })
    });

    let signupData = await signupResponse.json();
    console.log('✅ Signup Response:', signupData);
    
    if (!signupResponse.ok) {
      console.log('❌ Signup failed!');
      return;
    }

    // Step 2: Get OTP from database
    await delay(2000);
    console.log('\n🔍 Step 2: Checking database for OTP...\n');

    let debugResponse = await fetch(`http://localhost:5000/api/auth/debug-otp/${encodeURIComponent(testEmail)}`);
    let dbData = await debugResponse.json();
    console.log('📊 Database Data:', dbData);

    if (!dbData.otp) {
      console.log('❌ No OTP found in database!');
      return;
    }

    const savedOTP = dbData.otp.trim();
    console.log(`\n✅ Found OTP: ${savedOTP}`);
    console.log(`   Password saved?: ${dbData.password ? '❌ YES (ERROR!)' : '✅ NO (correct)'}`);
    console.log(`   isVerified?: ${dbData.isVerified}`);

    // Step 3: Verify OTP
    console.log(`\n🔐 Step 3: Verifying OTP: ${savedOTP}...\n`);

    let verifyResponse = await fetch('http://localhost:5000/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testEmail,
        otp: savedOTP,
        password: testPassword
      })
    });

    let verifyData = await verifyResponse.json();
    console.log('OTP Verification Response Status:', verifyResponse.status);
    console.log('OTP Verification Response:', verifyData);

    if (!verifyResponse.ok) {
      console.log('❌ OTP verification failed!');
      return;
    }

    // Step 4: Check final database state
    await delay(1000);
    console.log('\n✅ Step 4: Checking final database state...\n');

    debugResponse = await fetch(`http://localhost:5000/api/auth/debug-otp/${encodeURIComponent(testEmail)}`);
    dbData = await debugResponse.json();
    console.log('📊 Final Database Data:', dbData);
    
    console.log('\n✅ Test Summary:');
    console.log(`   Password saved after verification?: ${dbData.password ? '✅ YES (correct!)' : '❌ NO (error)'}`);
    console.log(`   isVerified?: ${dbData.isVerified ? '✅ YES (correct!)' : '❌ NO (error)'}`);
    console.log(`   OTP cleared?: ${!dbData.otp ? '✅ YES (correct!)' : '❌ NO (error)'}`);

  } catch (error) {
    console.error('❌ Test Error:', error.message);
  }
}

testCompleteFlow();

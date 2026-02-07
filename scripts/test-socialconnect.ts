
import fs from 'fs';
import path from 'path';
import { createInterface } from 'readline';

// 1. Load keys
const envPath = path.join(process.cwd(), '.env.local');
let SUPABASE_URL = '';
let SUPABASE_ANON_KEY = '';

try {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key === 'NEXT_PUBLIC_SUPABASE_URL') SUPABASE_URL = value?.trim();
    if (key === 'NEXT_PUBLIC_SUPABASE_ANON_KEY') SUPABASE_ANON_KEY = value?.trim();
  });
} catch (e) {
  console.error("❌ Error reading .env.local");
  process.exit(1);
}

const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/socialconnect-issuer`;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query: string): Promise<string> => {
  return new Promise(resolve => rl.question(query, resolve));
};

async function main() {
  console.log('\n📡 SOCIALCONNECT TEST BENCH');
  console.log('===========================');
  console.log('1. 📤 Send SMS (Request Verification)');
  console.log('2. ✅ Verify Code (Confirm & Register)');
  console.log('3. 🚪 Exit');
  
  const choice = await ask('\nSelect option (1-3): ');

  if (choice === '1') {
    const phone = await ask('📱 Enter phone number (e.g., +54...): ');
    await callEndpoint({ action: 'request_verification', phone: phone.trim(), account: '0xTestAccount' });
  } 
  else if (choice === '2') {
    const phone = await ask('📱 Enter phone number: ');
    const code = await ask('🔑 Enter 6-digit code: ');
    // We send a dummy account address for registration
    const account = '0x85980B722f9aC82258D55136be29eDE80d0F9E75'; 
    await callEndpoint({ action: 'verify_and_register', phone: phone.trim(), code: code.trim(), account });
  } 
  else {
    console.log("Bye!");
    rl.close();
    process.exit(0);
  }
  
  rl.close();
}

async function callEndpoint(payload: any) {
  console.log(`\n⏳ Sending request...`);
  try {
    const response = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log('\n📊 RESPONSE STATUS:', response.status);
    console.dir(data, { depth: null, colors: true });
    
    if (response.ok) console.log('\n✅ SUCCESS!');
    else console.log('\n❌ FAILED.');
  } catch (error) {
    console.error("\n❌ NETWORK ERROR:", error);
  }
}

main();

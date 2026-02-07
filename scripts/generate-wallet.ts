
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

const pk = generatePrivateKey()
const account = privateKeyToAccount(pk)

console.log('\n=============================================')
console.log('🔐  NEW ISSUER WALLET GENERATED')
console.log('=============================================')
console.log('ADDRESS (Public):    ', account.address)
console.log('PRIVATE KEY (Secret):', pk)
console.log('=============================================')
console.log('\n👇  ACTION REQUIRED:')
console.log('1. Copy the PRIVATE KEY.')
console.log('2. Fund the ADDRESS with Celo Sepolia tokens (Alfajores is deprecated):')
console.log('   🔗  https://faucet.celo.org/celo-sepolia (or Google Cloud Faucet)')
console.log('   🔗  https://cloud.google.com/application/web3/faucet/celo/sepolia')
console.log('\n3. Run this command to configure Supabase:')
console.log('   pnpm exec supabase secrets set ISSUER_PRIVATE_KEY=' + pk)
console.log('=============================================\n')

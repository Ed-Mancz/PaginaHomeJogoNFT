let userWallet = document.getElementById('userWallet')
let loginbtn = document.getElementById('LoginMetamask')

async function login(){
    console.log('oi')
    let accounts = await ethereum.request({ method: 'eth_requestAccounts'})
    let account = String(accounts[0])
    loginbtn.innerHTML =` <span style="color: #f6921d;">Wallet: </span> ${account.slice(0,5)} ... ${account.slice(-5)}` 
}
document.getElementById('generate').addEventListener('click', () => {
    
    //functions to add characters to the array based on type
    const pickLow = _ =>{
        let lows = 'abcdefghijklmnopqrstuvwxyz'
        return(lows[Math.floor(Math.random()*26)])
    }
    const pickUp = _ =>{
        let ups = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return(ups[Math.floor(Math.random()*26)])
    }
    const pickNum = _ =>{
        let nums = '1234567890'
        return(nums[Math.floor(Math.random()*10)])
    }
    const pickSpec = _ =>{
        let specs = `!"#$%&'()*+,-./:;<=>?@[\]^_` + '`{|}~'
        return(specs[Math.floor(Math.random()*31)])
    }

    //variable declaration
    let count = 0 //current length
    let countTypes = 0 //total types
    let pass = ''   //password
    let choices = [] //array of possible choices
    let choice = 0  //random choice
    let length = parseInt(prompt('How long should the password be? (8 - 128)')) 
    let low = false
    let up = false
    let num = false
    let special = false

    //input validation
    while(length < 8 || length > 128){
        length = prompt(`Please enter a valid number.
        How long should the password be? (8 - 128)`)
    }
    do{
        low = confirm('Should the password include lowercase characters?')
        up = confirm('Should the password include uppercase characters?')
        num = confirm('Should the password include numbers?')
        special = confirm('Should the password include special characters?')
        if(low == false && up == false && num == false && special == false){
            alert('Must include at least one option.')
        }
    }while(low == false && up == false && num == false && special == false)

    if(low == true){
        pass += pickLow() //add character to password
        countTypes++      //count total number of types
        count++           //count current characters in password
        choices.push(0)   //add lowercase to the choice array for filling the password
    }
    if(up == true){
        pass += pickUp()
        countTypes++
        count++
        choices.push(1)
    }
    if(num == true){
        pass += pickNum()
        countTypes++
        count++
        choices.push(2)
    }
    if(special == true){
        pass += pickSpec()
        countTypes++
        count++
        choices.push(3)
    }

    for(let i = 0; i < length; i++){
        choice = choices[Math.floor(Math.random()*countTypes)]  //random choice taken from array of possible choices
        if(choice === 0){
            pass += pickLow()
        }else if(choice === 1){
            pass += pickUp()
        }else if(choice === 2){
            pass += pickNum()
        }else{
            pass += pickSpec()
        }
    }
    //output
    document.getElementById('password').innerText = pass
})
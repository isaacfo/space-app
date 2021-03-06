function registerform(){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="../css/register.css">
        <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0"
            crossorigin="anonymous"></script>
        <title>Sign Up </title>
    </head>
 
            <div class="SignUp">
                
                <h1 class="SignUp-header">Sign Up</h1>
                
                <form action="/register" method="POST" class="SignUp-container">
                    <p><input type="text" name="username" placeholder="Username"></p>
                    <p><input type="password" name="password" placeholder="Password"></p>
                    <p><input type="submit" value="Sign Up"> <i class="fas fa-user-astronaut fas-3x"></i></p>
                </form>
            </div>
        
    `;
}

module.exports = registerform;
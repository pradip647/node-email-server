# node-email-server
This is the example of sendimg email from server using node js


## Step by Step Working Example

### Requirements
* Node js
* nodemailer


#### IMPORTANT:

You need to replace your email and password bellow this position
```
    auth: {
        user: 'xxxxxxxx@xxxx.xxx', //Admin Email
        pass: 'xxxxxxxx' // Admin password }
    }

```
for sending email you need to change  code bellow :

```
    var Options = {
        from: 'xxxxxxxx@xxxx.xxx', // sender address
        to:  'xxxxxxxx@xxxx.xxx', // list of receivers
        subject: '< Your message subject is here >', // Subject line
        html:mailbody
    };
```

#### If some error showing like- 

```
Error: Invalid login: 534-5.7.9 Application-specific password required

```
#### then you have to change your email settings for sending email properly you need to  change bellow - 

```
* for Email sending you need to enable less security option .Please go to admin email and enable less security - 
-- here is the link-- 'https://myaccount.google.com/lesssecureapps'

* If your email 2-Step Verification enabled, then  you can not enable less security , you have to disable 2-Step Verification to do this. 

```


## Working Code
To run the above tested and ready code please clone the repository and change following changeges in your project index.js.

```
npm install 
node index.js

```



### Resources

* Node.js - https://nodejs.org/en/docs/guides/getting-started-guide/

* nodemailer - https://nodemailer.com/about/



# Discord-Api
This is a custom api that I am working on to help mod discord in a fun way.

# How to use
I am not sure if this works for the downloaded discord but it works if you paste it into your devolper console

# API
<h2>getCurrentUser</h2>
this gets the current user logged in
gets this information about the user:
<br>
hasFlag
<br>
isStaff
<br>
id
<br>
username
<br>
discriminator
<br>
avatar
<br>
avatarDecoration
<br>
email
<br>
verified
<br>
bot
<br>
system
<br>
mfaEnabled
<br>
mobile
<br>
desktop
<br>
premiumType
<br>
flags
<br>
publicFlags
<br>
purchasedFlags
<br>
premiumUsageFlags
<br>
phone
<br>
nsfwAllowed
<br>
guildMemberAvatars
<h2>getUser</h2>
Does the same thing as above but with a diffrent user (exscluding personal info eg:phone) when provided an id
<h2>getUsers</h2>
Lists all the users loaded, this is used so you can load people faster and this is what I used for my function
<h2>getUserByUsername</h2>
This was made by me so you dont have to get someones ID and its easier for people to use because it is a username, the old version only did the first person it found but I updated it so you can have as many users with the same username as you want and it wont break

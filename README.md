## Please note: this repository is deprecated, it is not functional at this time
#### I am working on updating it in my spare time
<br><br>
# Turntable
_The Spotify group playback organizer_

## Setup Instructions

### [Create a Spotify App](https://developer.spotify.com/)
Input your created app's Client_ID and Client_Secret into
```bash
turntable/spotify/credentials.py
```

### Install Required Python Modules

```bash
pip install -r requirements.txt
```
### Start Web Server

To start the web server you need to run the following sequence of commands.

First cd into the turntable folder.
```bash 
cd "turntable"
```
Next run the django web server.
```bash
python manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```
<br></br>
This was made for my Senior Project with help from some [TechWithTim tutorials](https://github.com/techwithtim/Music-Controller-Web-App-Tutorial)

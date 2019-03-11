# The Resistance: Avalon Announcer App

A progressive web app written using Angular to act as an announcer for games of The Resistance: Avalon.

## Usage Instructions

1. Use the button in the bottom left to select the number of players.
2. Select the desired roles.
3. Distribute and privately view role cards.
4. Press play to begin narration.

## Build Instructions

``` bash
cd avalon-app
npm install -g @angular/cli
npm install
ng build
```

## Speech Synthesis

``` bash
cd speech_synthesis
gem install google-cloud-text_to_speech
ruby google-cloud.rb
```

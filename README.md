# PinBrawl Wizard

## Background Overview
Space Cadet Pinball has been played by millions of people worldwide, from bored students in the computer room to bored adults who want to procrastinate at work.  In 1969, The Who created Pinball Wizard, a legendary song in their groundbreaking rock opera album, Tommy.  2021 calls for the advent of a new chapter of virtual pinball games that recaptures the magic of the classics.  Introducing: PinBrawl Wizard.  

In the game, the player controls a wizard in a pinball machine who uses pinballs and flippers to fight hordes of monsters that slowly advance towards to him.  A whole host of pinballs with various effects are at your disposal, from explosive ammo, rocket-powered pinballs, and more.  Players can also make their own enemies by dropping pictures into the game.

<img width="415" alt="Pinbrawl_Wizard_Pic_old" src="https://user-images.githubusercontent.com/73966827/123719192-f1c1f100-d84e-11eb-8085-f804ec4e7b91.png">

## Functionality
- The player can fire pinballs with pinball paddles and hit enemies that slowly head for the bottom of the screen
- Players can drag and drop pictures that will be used as the visuals for enemy monsters
- Enemies can make their way to the bottom part of the screen
- Characters will be animated as simple pixel sprites
- Title screen and side panel with pause button and game score
- Music


## Architecture and Technology
- Javascript 
    * game.js - controls the entities on the board by moving them, drawing them, and managing object collisions.
    * ball.js - manages the pinballs and their powerups
- HTML5 Canvas - to visualize the game board
- Drag and Drop API - to add enemies to the game

## 

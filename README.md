# PinBrawl Wizard

## Background Overview
Space Cadet Pinball has been played by millions of people worldwide, from bored students in the computer room to bored adults who want to procrastinate at work.  In 1969, The Who created Pinball Wizard, a legendary song in their groundbreaking rock opera album, Tommy.  2021 calls for the advent of a new chapter of virtual pinball games that recaptures the magic of the classics.  Introducing: PinBrawl Wizard.  

In the game, the player controls a wizard in a pinball machine who uses pinballs and flippers to fight hordes of monsters that slowly advance towards to him.  A whole host of pinballs with various effects are at your disposal, from explosive ammo, rocket-powered pinballs, and more.  Players can also make their own enemies by dropping pictures into the game.

## Functionality
- The player will be able to fire pinballs with pinball paddles and hit enemies that slowly head for the bottom of the screen
- The players can fire pinballs with two settings, strong or weak, to add more depth to the game.
- The pinball field will have bumpers and blocks that propel the balls and enemies.
- 3 different pinball skills:  pinball that shoots in a straight line, pinball that explodes, pinball that explodes into smaller pinballs, and an effect where the player can rapid fire lots of pinballs.
- Players can drag and drop pictures that will be used as the visuals for enemy monsters
- Enemies can make their way to the bottom part of the screen
- Characters will be animated as simple pixel sprites (More details will be added to them if there is extra time)
- Title screen and side panel with pause button and game score
- Music

## Wireframes
<img width="1030" alt="Screen Shot 2021-04-05 at 5 53 31 AM" src="https://user-images.githubusercontent.com/73966827/113562175-a55e7080-95d3-11eb-831c-02f087bf0cc7.png">
<img width="1038" alt="Screen Shot 2021-04-05 at 5 51 07 AM" src="https://user-images.githubusercontent.com/73966827/113562190-abece800-95d3-11eb-8848-8c8090acd348.png">  

## Architecture and Technology
- Javascript 
    * game.js - controls the entities on the board by moving them, drawing them, and managing object collisions.
    * ball.js - manages the pinballs and their powerups
- HTML5 Canvas - to visualize the game board
- Drag and Drop API - to add enemies to the game

## Implementation Timeline

**Monday:**  Finish Pinball, Enemy, and Block entities and finish collisions, physics and basic game logic.  
**Tuesday:**  Work on pinball effects, wizard, handle various game states (win, lose, start screen), figure out drag and drop  
**Wednesday:**  Work on background, JS screens and modals  
**Thursday:**  add images to enemies and sprites to other entities  
**Friday:**  add animations, sounds, finishing touches

## Bonuses 
- Better animations
- refined pinball effects 
- better monster movement
- better illustrations/sprites








+++
title = "Making Of: Mineout"
date = 2021-01-07

extra.image = "assets/images/blog/making_of_mineout.png"
+++

As described by the homepage, 
> Mineout is a free-for-all party game in which players must reach the end of a set course. The default map has four sections:
> * Bridging: players must bridge to the other side of a large gap while it decays behind them
> * Elytra: players must fly through scattered blocks to get to the other side
> * Riptide: players must use a Riptide trident to fly through hoops
> * Parkour: players must cross a lava pit by parkour

The game was devised by mounderfod (I'm writing this thing, hi there!) and both Marth_Daul and SillySausage09 helped with the building. Gegy then programmed the whole minigame in Plasmid.

# Original Design
The minigame is based on *To Get To The Other Side (TGTTOS)*, which is one of the games present in the popular [Minecraft Championship](https://noxcrew.com/mcc). TGTTOS involves a number of rounds in which the players work to, well, *get to the other side*, using various means of transport to reach the end goal each time. There are parkour rounds, bridging rounds, and even a trident Riptiding round. No other server that I knew of had a minigame anything like this, and at the time I was a builder for Nucleoid, and so I made the decision to open a map and try to build a similar game. 

# Mineout v1
The original Mineout which I had devised had four sections in order: parkour, elytra flight, riptiding and bridging. It took me a few days to build the map but with the help of SillySausage and Marth, I was able to get it done. Most of the parkour and elytra section was randomly generated using WorldEdit, and then modified to make it playable. There were a few issues that we had to solve, particularly with the elytra and trident sections. How could we stop the player from going in the wrong place? Eventually, we decided to use water to catch the players in the elytra section, and then they could swim down a small opening into the trident section (1). If they were flying lower, then they could pass straight through (2). 

![Mineout Diagram](/assets/images/blog/mineout_diagram.png)

# Balancing and Fixes
After this, we did a variety of tests and received a range of feedback. One of the main concerns was that the parkour section split up the crowd too much at the start, and whoever did well there would probably win regardless of their performance later. Another concern was that players could build faster by building alongside the barriers on the side of the map during the bridging section. Finally, it was possible to use others bridges during the bridging section to not have to bridge across.

To combat the first issue, we moved the bridging to the start and the parkour to the end, and we made it so that you could PvP during the bridging section and added block decay (blocks slowly disappear) so as to fix the third problem. As for the side building, we made changes to the NBT so that you could not place the wool on barrier blocks, and shrunk the building region so that you couldn't build on them anyway. We also made sure to patch any potential out-of-bounds bugs.

This left Mineout in its final, current state. The game is now quick-paced but challenging and a number of players have expressed that this makes the minigame fun to play. We continue to accept and work on feedback!

If you'd like to try the game out for yourself, connect to `play.nucleoid.xyz` and find the Mineout NPC. You don't even need to play with others, either - you can just as easily do a solo time trial!
#!/bin/bash
# this is only meant for me cause idk
# code -> game
for folder in config defaultconfigs kubejs; do
  cp -rf $folder/ $MODPACKS/flatTech/minecraft/
done

# game -> code
for folder in .probe .vscode; do
  cp -rf $MODPACKS/flatTech/minecraft/$folder .
done

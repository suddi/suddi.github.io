#!/bin/sh

# Install Node.js
NODE_VERSION=4.2.3
NVM_DIR=$HOME/.nvm

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
. $NVM_DIR/nvm.sh
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
npm install -g \
    repl.history \
    mocha \
    webpack

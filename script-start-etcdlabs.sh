#!/usr/bin/env bash
set -ex

echo "building backend ectcdlabs"
go build -v

echo "running backend etcdlabs"
nohup ./etcdlabs >> $HOME/etcdlabs.log 2>&1 &

sleep 3s
echo "starting frontend"
nohup npm start >> $HOME/etcdlabs-npm.log 2>&1 &

sleep 2s
cat $HOME/etcdlabs-npm.log
cat $HOME/etcdlabs.log
# tail -f $HOME/etcdlabs-npm.log
# tail -f $HOME/etcdlabs.log
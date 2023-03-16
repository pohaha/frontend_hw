#! /bin/bash

x=0
filenames=`ls ./*.jpg`
for filename in $filenames
do
	x=$((x+1))
	mv $filename ./image_$x.jpg
done
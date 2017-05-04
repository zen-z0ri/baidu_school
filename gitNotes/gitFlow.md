#	This is a git notes that learn git by using it.
The referrence:
1. https://git-scm.com/docs/
2. https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
3. http://www.techug.com/post/git-cheat-sheet.html

## 1. Install git
1. ```$ apt-get install git``` 	//install git
2. ```$ git config --global user.name "XXX"```<br/>
 ```$ git config --global user.email "XXX"``` 	//config
3. ```$ git config --list```  //show the config

## 2. Put your porject to github
1. ```$ git init ``` 	//in your project dir 
2. Authenticating to GitHub: https://help.github.com/categories/authenticating-to-github/
3. Add a respository in git.
4. ```$ git remote add origin git@github.com:yourname/XXX.git```	//config remote repository. 
5. ```$ git add .``` 	//add the all file to stage
6. ```$ git commit -m "XXX" ``` 	// commit it
7. ```$ git push -u origin master``` 	//push the repository

## 3. Clone others work
1. ```$ git clone [url]```	//clone others work 

## 4. The basic github workflow 
When you are using github, the work flow is shown as below:

<img src="./bg2015080501.png" width="400"/>

1. Fork others' work on github

## 5. Add or remove files
1. ```$ git add [file1] [file2] ...```<br/>
 ```$ git add . ``` 	   // add all files in current dir
2. ```$ git rm [file1] [file2] ...```//delete the files and make the operation to the stage
3. ```$ git mv [name1] [name2]```//change the name and make the operation to the stage

## 6. Information
1. ```$ git status```

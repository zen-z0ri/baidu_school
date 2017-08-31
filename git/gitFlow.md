#	This is a git notes that learn git by using it.
The reference:
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

<img src="./bg2015080501.png" width="390"/>

1. Fork other's work on github
2. ```$ mkdir ./path``` //create the working path
3. ```$ git init``` 
4. ```$ git remote add origin [url]```//or replace 2,3,4 steps with ```$ git clone```
5. ```$ git checkout -b [My Branch]```//initial your new branch from the master
6. Make changes
7. ```$ git remote add upstream [upstream address]``` // if you clone from you github, it will generate automatically
8. ```$ git add .```, ```$ git commit -m "XXX" ```...
9. ```$ git remote update upstream```
10. ```$ git push origin master```

## 5. Add or remove files
1. ```$ git add [file1] [file2] ...```<br/>
 ```$ git add . ``` 	   // add all files in current dir
2. ```$ git rm [file1] [file2] ...``` //delete the files and make the operation to the stage
<br />```$ git rm --cached [file1] [file2] ...``` //just **stop tracking** the file 
<br />```git push```// remove the remote file
3. ```$ git mv [name1] [name2]```//change the name and make the operation to the stage
4. To delete the local commits: 
    * ```bash
        $ git reset --hard [commit] // to the commit you like
    ``` 
5. To delete the remote commits:
     * ```bash
        $ git reset --hard [commit] // to the commit you like in local
        $ git push --force origin master //delete remote
     ```
    
## 6. Information
1. ```$ git status ``` //show the information of current status `most use one!`, 
2. ```$ git log``` // show the commit history of current branch
3. ```$ git log --graph``` // with graph version
4. ```$ git log --oneline```// show in one line
5. ```$ git diff```// show the difference between the working space and stage
6. ```$ git diff HEAD```// show the difference between the working space and newest commit 

## 7. Undoing changes
1. ```$ git checkout [branch]```//change the branch
2.  ```$ git checkout [file]```//Undoing the changes from stage to working sapce
3.  ```$ git checkout [commit] [file]``` //Undoing the changes from some commit to working sapce
4.  ```$ git reset [commit]``` //reset the working space from some commit
5.  ```$ git reset --hard [commit]```// reset both the stage and working space from some commit 

## 8. Branches
1. ```$ git branch``` // list the local branch
2. ```$ git branch -a``` // list both the local branch and remote branch
3. ```$ git branch --track [branch] [remote-branch]``` //set a new branch and track the remote-branch
4. ```$ git branch -d [branch]```// delete branch 
<br />   ```$ git branch -D [branch]```// force delete branch
5. ```$ git push origin :[branch]```// remove the remote branch
6. ```$ git merge --no-ff [branch]```//Merge the specified branch into the current branch

## 9. Remote

1. ```$ git remote -v ```//show the remote information
2. ```$ git remote add [name] [url]```
3. ```$ git pull [remote(origin)] [branch]```//==fetch + merge some remote branch to current local branch
4. ```$ git push [remote(origin)] [localBranch]:[remoteBranch]``` //push somelocal branch to remote branch
5. ```$ git push origin :[branch]```// delete the remote branch

## 10. Detached HEAD

1. Build a temp branch ```$ git branch temp``` 
<br />//This make the current detached content to the temp branch
2. Back to the master/dev branch: ```$ git checkout master```
3. Merge temp to the master: ```$ git merge temp```
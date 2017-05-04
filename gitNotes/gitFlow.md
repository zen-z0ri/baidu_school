#	This is a git notes that learn git by using it.
The referrence:
1. https://git-scm.com/docs/
2. https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud

## 1. Install git
1. ```$ apt-get install git``` //install git
2. ```$ git config --global user.name "XXX"```<br/>
 ```$ git config --global user.email "XXX"``` //config
 
## 2. Put your porject to github
1. ```$ git init ``` //in your project dir 
2. Authenticating to GitHub: https://help.github.com/categories/authenticating-to-github/
3. Add a respository in git.
4. ```$ git remote add origin git@github.com:yourname/XXX.git```//config remote repository.
5. ```$ git add .``` //add the all file to stage
6. ```$ git commit -m "XXX" ``` // commit it
7. ```$ git push -u origin master``` //push the repository

## 3. The basic github workflow 
When you are using github, the work flow is shown as below:

<img src="./bg2015080501.png" width="300"/>

1. Fork others' work on github


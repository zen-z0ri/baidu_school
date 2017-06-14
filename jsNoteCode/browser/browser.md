# The browser

## 1. URL (Uniform resource locator)
|Protocol|Domain name|Path Name|
<img src="./url.png"/>

![url example](./url.png)

### 1.1 The URL domain level

![Domain Level](./domainLevel.png)


### 1.2 There three methods to find a parameter in express:
 * req.params
 * req.query 
 * req.body

#### 1.2.1 req.params
Given this route:
```javascript
app.get('/users/:userId/books/:bookId',function(req,res){});
```

Given this URL  
``` 
http://localhost:3000/users/34/books/8989
```

**req.params**<br/>
 * req.params.userId
 * req.params.bookId

#### 1.2.2 req.query
With **GET**
Given this route:
```javascript
app.get('/users/:userId/books/:bookId',function(req,res){});
```

Given this URL  
```
url: http://localhost:3000/usersbooks?userId=34&bookId=8989
```

**req.query**<br/>
 * req.query.userId
 * req.query.bookId
#### 1.2.3 req.body
MUST use **POST**
data {userId:34, bookId:8989} is sent as part of request body

Using **body-parser** middleware
```javascript 1.8
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
```
**req.query**<br/>
 * req.body.userId
 * req.body.bookId

---
## 2. HTTP
 * Using TCP (which is ***Stateful***)
 * HTTP is ***Stateless*** --> server maintains no information about past client requests
 * Having methods: ***GET, POST*** <br/>***HEAD*** asks server to leave the requested object out of response
<br/> ***PUT*** uploads file to the sepcified URL
<br/> ***DELETE*** deletes file specified in the URL field
 * HTTP/1.0 use ***Non-persistent*** connection; HTTP/1.1 in default uses **persistent** connections(Multiple objects can be sent over single TCP connection).
<br/><br/> For a page with 11 objects: 1 html + 10 imgs :
<br/> ***HTTP/1.0*** --> 11 RTT for TCP connection --> 22 RTT + 11 tansmit time (html+10objs)
<br/> ***HTTP/1.1*** (_Persistent_ HTTP)--> 1 RTT for TCP connection --> 12 RTT + 11 tansmit time (html+10objs)

### 2.1 GET vs POST
#### 2.1.1 Overview
1. GET change the url and all information in url , POST put information into the **Request body**;
2. GET will create one TCP packet, POST will create two; (GET is more **efficient** and POST **safer**);
3. GET would be **auto**-cashed, POST not;
4. GET size is limited by the **url**, POST not;
5. Semantically, GET just fetch data on the server, POST change the data.

#### 2.1.2 With HTML form
(see also at html notes)
```html
<form method="POST" action="/urlDoSomething">
    <fieldset>
        <!--put multiple form element together-->
        <legend>This would be a form title</legend>
        <!--type="text"-->
        <label>Please enter your e-mail adress</label>
        <input type="text" id="address" placeholder="Please enter your e-mail" />
        <p>Please enter your e-mail using the correct format</p>

        <!--type=“radio”-->
        <lable for="gender">gender：</lable>
        <input type="radio" name="gender" value="male" checked />male <br/>
        <input type="radio" name="gender" value="female" />female <br/>
        
        <input type="radio" name="gender" value = 1 checked="checked"/>
        <label>Female</label> <br />    
        <input type="radio" name="gender" value = 0 />
        <label>Male</label> <br />
        
        <!--select-->
        <lable for="city">city：</lable>
        <select name="city">
            <option value="1" selected>Beijing</option>
            <option value="2">Shenzhen</option>
            <option value="3">Shanghai</option>
            <option value="4">Sydney</option>
            <option value="5">Melbourne</option>
        </select>
        <button class="submit">Submit</button>
        <button class="reset">Reset</button>
    </fieldset>
</form>
```
* Form **action** is for the form-handler: a URL for router or a PHP program
* Form **method** specify the HTTP method
* Form element **name** and **value** are to specify the data

![selectURL](selectURL.png)
---

![checkBoxURL](checkboxURL.png)
* If method is GET, will get url ***.../action?name1=value1&name2=value2***

---
## 3. Caching in HTTP
### 3.1 Expiration Model
* Eliminate the need to send requests
* Reduce the number of network round-trips required for many operations
### 3.2 Validation Model
* Eliminate the need to send requests
* Reduce network bandwidth requirements

---
## 4. Render 
### 4.1 Rendering Process

1. Process **HTML** elements --> the **DOM** tree
<br />While build the DOM, the **request of the objects**(like **img a**)
2. Process **CSS** rules --> the **CSSOM** tree
3. Combine the **DOM** and **CSSOM** --> a **render tree**
4. Run layout on the render tree to compute geometry of each node;

**DOM**
* Each element inside a HTML document is represented as a node;
* **Attributes** and **Text** between a pair of tags are also nodes;

**CSSOM**
* Only elements that will be displayed appear in the render
  tree (**Start from <body>**);

### 4.2 Render Blocking Resources 
* Browser needs to **have all of them** before it can start to display something on its window
* **HTML** and **CSS(traditional)** are render blocking resource
* **CSS media query** consists of a media type and zero or more expressions that check for the conditions of particular media features
<br /> 
    ```html
    <link href="style.css"    rel="stylesheet">
    <link href="style.css"    rel="stylesheet" media="all">
    <link href="portrait.css" rel="stylesheet" media="orientation:portrait">
    <link href="print.css"    rel="stylesheet" media="print">
    ```
* **CSS** place on the top of HTML can make page efficient
* **Embedded or Inline JS** may block DOM construction, which also delays the initial render
* 
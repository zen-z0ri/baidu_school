# Node
## 1. Background (Thread Pool V.S. Event Loop)
1. Other sever most use concurrently multi-threads to handle a large number of user requests.
1.1 Each request is handled by a **separate thread**.
2. Node.js server runs on a single thread, very light footprint on system resource.
2.1 JS is designed to run in a single thread, both in browser and server.
2.2 Node.js relies on **event loop and callback** mechanisms to achieve **non-blocking, asynchronous** execution.
## 2. CommonJS and module
* Use **require()** to involve module; use **module.exports = {funcName:funcName}** to export the function.
* The module we require only be execute at the first time we use it, and initial the module.exports object, then cached.
    * **Counter.js**
    ```javascript
    let i = 0;
    
    function count() {
        return ++i;
    }
    
    exports.count = count;
    ```
    * **Index.js**
    ```javascript
      let counter1 = require('./js/counter');
      let counter2 = require('./util/counter');
      
      console.log(counter1.count());
      console.log(counter2.count());
      console.log(counter2.count());
    ```
    * **Result**
    ```bash
      $ node main.js
      1
      2
      3
    ```
* The **global** scope
    * In the browser, global level is bind with **window** (or in jQuery **document**)
    * In the Node.js, the global level is bind with **global** object.
## 3. Path
1. In node.js, **require()** is always anchor in the **current module's working dir**.
2. However, most other functions require path is anchor in the **run-time dir** 
<br /> We can test use: ```console.log(cwd())```;
3. In express, we can do:
<br /> ``` app.set('views', path.join(__dirname,'app/views'));```
<br /> That set the 'views' variable. 
<br /> When```res.render(path, data)``` it search under this path.
4. In express, we also do:
```app.use(express.static(path.join(__dirname, 'public')));```
<br />That set the static variable. when the views need contain static meterial: figs, CSS or js... it search under this 'express.static' variable

var e=function(){var e=this,t=this,n=this;this.queue=[],this.listeners={},this.emit=function(e){for(var t in n.listeners)t===e&&n.listeners[t]()},this.once=function(e,t){n.listeners[e]=t},this.awaitFor=function(e){return new Promise(function(t){n.once(e,t)})},this.push=function(t){try{return e.queue.push(t),e.emit("new_value"),Promise.resolve(e)}catch(e){return Promise.reject(e)}},this.pop=function(){try{var e=function(){return t.queue.pop()},n=function(){if(!t.queue.length)return Promise.resolve(t.awaitFor("new_value")).then(function(){})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}}};export{e as AwaitQ};
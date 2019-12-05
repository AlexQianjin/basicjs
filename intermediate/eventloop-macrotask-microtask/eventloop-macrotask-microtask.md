# **Concurrency model and the event loop**

## **Runtime concepts**
The following sections explain a theoretical model. Modern JavaScript engines implement and heavily optimize the described semantics.

### **Visual representation**
![VisualRepresentation](https://developer.mozilla.org/files/4617/default.svg)

### **Stack**
Function calls form a stack of *frames*.

```javascript
function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

console.log(bar(7)) //returns 42
```

When calling `bar`, a first frame is created containing `bar`'s arguments and local variables. When `bar` calls `foo`, a second frame is created and pushed on top of the first one containing `foo`'s arguments and local variables. When `foo` returns, the top frame element is popped out of the stack (leaving only `bar`'s call frame). When `bar` returns, the stack is empty.

### **Heap**
Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

### **Queue**
A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

## **Event loop**
The **event loop** got its name because of how it's usually implemented, which usually resembles:

```javascript
while (queue.waitForMessage()) {
  queue.processNextMessage()
}
```

`queue.waitForMessage()` waits synchronously for a message to arrive (if one is not already available and waiting to be handled).

### **"Run-to-completion"**
Each message is processed completely before any other message is processed.

This offers some nice properties when reasoning about your program, including the fact that whenever a function runs, it cannot be pre-empted and will run entirely before any other code runs (and can modify data the function manipulates). This differs from C, for instance, where if a function runs in a thread, it may be stopped at any point by the runtime system to run some other code in another thread.

A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the "a script is taking too long to run" dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.

### **Adding messages**
In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. If there is no listener, the event is lost. So a click on an element with a click event handler will add a message—likewise with any other event.

The function `setTimeout` is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to 0). The time value represents the (minimum) delay after which the message will actually be pushed into the queue. If there is no other message in the queue, the message is processed right after the delay. However, if there are messages, the `setTimeout` message will have to wait for other messages to be processed. For this reason, the second argument indicates a minimum time—not a guaranteed time.

Here is an example that demonstrates this concept (`setTimeout` does not run immediately after its timer expires): 

```javascript
const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
```

### **Zero delays**
Zero delay doesn't actually mean the call back will fire-off after zero milliseconds. Calling `setTimeout` with a delay of 0 (zero) milliseconds doesn't execute the callback function after the given interval.

The execution depends on the number of waiting tasks in the queue. In the example below, the message `''this is just a message''` will be written to the console before the message in the callback gets processed, because the delay is the minimum time required for the runtime to process the request (not a guaranteed time).

Basically, the `setTimeout` needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your `setTimeout`.

```javascript
(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
```

### **Several runtimes communicating together**
A web worker or a cross-origin `iframe` has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the `postMessage` method. This method adds a message to the other runtime if the latter listens to `message` events.

## **Never blocking**
A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or an XHR request to return, it can still process other things like user input. 

Legacy exceptions exist like alert or synchronous XHR, but it is considered as a good practice to avoid them. Beware: exceptions to the exception do exist (but are usually implementation bugs, rather than anything else).

# **Basic concepts in Task**
- An event loop has one or more task queues.(task queue is macrotask queue)
- Each event loop has a microtask queue.
- task queue = macrotask queue != microtask queue
- a task may be pushed into macrotask queue,or microtask queue
- when a task is pushed into a queue(micro/macro),we mean preparing work is finished,so the task can be executed now.

## **Task Examples**
### **macrotasks**
- setTimeout
- setInterval
- setImmediate
- requestAnimationFrame
- I/O
- UI rendering
### **microtasks**
- process.nextTick
- Promises
- Object.observe
- MutationObserver

# **Promise**
A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

Here's some code that uses `createAudioFileAsync()`:

```javascript
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

…modern functions return a promise you can attach your callbacks to instead:

If `createAudioFileAsync()` were rewritten to return a promise, using it could be as simple as this:

```javascript
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

That's shorthand for:

```javascript
const promise = createAudioFileAsync(audioSettings); 
promise.then(successCallback, failureCallback);
```

## **Guarantees**
Unlike "old-style", passed-in callbacks, a promise comes with some guarantees:

- Callbacks will never be called before the completion of the current run of the JavaScript event loop.
- Callbacks added with then() even after the success or failure of the asynchronous operation, will be called, as above.
- Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted.

One of the great things about using promises is **chaining**.

## **Chaining**
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a **promise chain**.

In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

```javascript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

The arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback). You might see this expressed with arrow functions instead:

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```
> **Important**: Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions () => x is short for () => { return x; }).

This symmetry with asynchronous code culminates in the `async/await` syntactic sugar in ECMAScript 2017:
```javascript
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}

```

## **Macro Task and Micro Task**
```javascript
console.log('script start');

setTimeout(() => {
  console.log('setTimeout 1');
});

Promise.resolve()
.then(() => {
  console.log('promise 1');
})
.then(() => {
  console.log('promise 2');
});

console.log('script end');
```
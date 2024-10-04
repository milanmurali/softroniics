function placeOrder(orderId) {
    let delay = Math.floor(Math.random() * 2000) + 1000
    // console.log(delay);

    let placeOrderpromise = new Promise((resolve, reject) =>
        setTimeout(() => { resolve("Order " + orderId + " Placed in " + delay / 1000 + " secs") }, delay))

    return placeOrderpromise
}

// placeOrder().then(message => { console.log(message) })
// Promise.all([placeOrder(4), placeOrder(3)]).then(message => { console.log(message) });
// Promise.all([placeOrder(4), placeOrder(3)]).then(message => { message.map(message => console.log(message))});

Promise.race([placeOrder(4), placeOrder(3)]).then(message => console.log(message));



function processPayment(orderId) {
    let delay = Math.floor(Math.random() * 2000) + 2000
    // console.log(delay);

    let processPaymentpromise = new Promise((resolve, reject) =>
        setTimeout(() => { resolve("Payment for Order " + orderId + " processed successfully") }, delay))

    return processPaymentpromise
}

// processPayment(5).then(message => { console.log(message) })

function deliverOrder(orderId) {
    let delay = Math.floor(Math.random() * 4000) + 1000
    // console.log(delay);

    let deliverOrderpromise = new Promise((resolve, reject) =>
        setTimeout(() => { resolve("Order " + orderId + " delivered successfully") }, delay))

    return deliverOrderpromise
}

// deliverOrder(5).then(message => { console.log(message) })   

function cancelOrder(orderId, shouldCancel) {
    let cancelOrderpromise = new Promise((resolve, reject) => {
        if (shouldCancel) {
            reject("Order " + orderId + " was Canceled")
        }
        else {
            resolve("Order " + orderId + " was not canceled and will be processed")
        }
    })
    return cancelOrderpromise
}

cancelOrder(6,true)
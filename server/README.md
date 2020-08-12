# Backend

## Endpoints

### GET

#### `.get("/items", handleGallery)`

Retrieves all items from data/item.json

#### `.get("/items/:itemId", handleGetItem)`

retrieves a specific item using the item's id from the url param.

#### `.get("/companies", handleGetAllCompanies)`

gets all companies from data/companies.json

#### `.get("/companies/:companyId", handleGetCompany)`

gets info about a specific company using the company's id from the url param

#### `.get("/orders", handleGetAllOrders)`

gets all orders from data/orders.json

#### `.get("/orders/:orderId", handleGetOrder)`

gets a specific order using the order's ID

#### `.get("*", handleFourOhFour)`

endpoint for pages not created

### POST

#### `.post("/orders", handleNewOrder)`

This endpoint receives the customer's order from the FE in the same format as in data/orders.json. It validates that if the quantity in storage can satisfy the demand. If all goes well, the BE will update the items quantity in data/items.json and then create a new entry in /data/orders.json.When the request is successful the BE will send a JSON in this format:

```
{
    "message": "Success! Order has been approved!",
    "approvedItems": {
    "6543": {
      "itemId": 6543,
      "newNumInStock": 7,
      "amountOrdered": 2
    },
    "6547": {
      "itemId": 6547,
      "newNumInStock": 4,
      "amountOrdered": 2
    },
    "order":{
        (Object in the same format as in data/orders.json)
    },
}

```

If the request is rejected, the response will be in this format instead:

```
{
  "message": "Failure. Not enough stock for items ordered",
  "rejectedItems": {
    "6547": {
      "itemId": 6547,
      "numInStock": 6,
      "amountOrdered": 20
    }
  }
}
```

#### `.post("/signin", handleSignIn)`

This enpoint receives a customer email and checks if the email exists in data/customers.json. If it does then it will send back the customer's infos. Otherwise, it will send an error messsage:

```
{
  "message": "Login successful!",
  "customer": {
    "email": "justinthyme@mail.com",
    "customer": [
      "6789"
    ]
  }
}
```

```
{
  "mesage": "Invalid email or password"
}
```

# Notification System Design

## Stage 1: REST API Design

### AS PER MY UNDERstanding by seeing the stage 1
1. fetch all notifications
2. fetch only unread messages
3. if we read notification mark it as read
4. now this api route help to mark all as read at a time
5. delete a notification
6. the last route can be kinf of notifaction statistics 


## lets develop endpoints one by one

#### 1. get all messages 
this is get req we can test by using `api : GET then we can use this ex : /api/v1/notifications`

Request:
json
Headers:
{
  "Authorization": "Bearer <jwt_token>",
  "Content-Type": "application/json"
}

implemetation parameters

limit - in range
offset - 0
status: string (values: "read", "unread", "all" - default: "all")
like this etc ...

result should be : response : 200 ok
{
  "success": true,
  "message": "Notifications retrieved successfully",
  "data": {
    "notifications": [
      {
        info
      }
    ],
    "pagination": {
     here we can get offset etc
    },
    "statistics": {
       msg category count
    }
  },
  
}



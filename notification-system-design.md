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
  "Authorization": token here,
  "Content-Type": "application/json"
}

implemetation parameters


result should be : response : 200 ok
{
  result
  
}

#### 2. Get Unread Notifications Count
GET /api/v1/notifications/unread/count

return count of unread notifications

#### 3. Mark Notification as Read
PUT /api/v1/notifications/:notificationId/read

mark one notification as read

#### 4. Mark All Notifications as Read
PUT /api/v1/notifications/read-all

mark all notifications as read

#### 5. Delete a Notification
DELETE /api/v1/notifications/:notificationId

delete one notification

#### 6. Delete All Notifications
DELETE /api/v1/notifications/delete-all

delete all notifications

#### 7. Get Notification Details
GET /api/v1/notifications/:notificationId

get details of one notification

## Stage 2 & 3: Routes We Use

these are all the routes we need:

GET    /api/v1/notifications              - get all notifications
GET    /api/v1/notifications/:id          - get one notification
GET    /api/v1/notifications/unread/count - get unread count
PUT    /api/v1/notifications/:id/read     - mark as read
PUT    /api/v1/notifications/read-all     - mark all as read
DELETE /api/v1/notifications/:id          - delete one
DELETE /api/v1/notifications/delete-all   - delete all


thats it. these are the main routes. each route handles its own logic with proper queries and indexes on database



## VIETNAM NATIONAL UNIVERSITY HO CHI MINH CITY

## UNIVERSITY OF TECHNOLOGY

## FACULTY OF COMPUTER SCIENCE & ENGINEERING

## MULTIDISCIPLINARY PROJECT - CO

# SMART HOME MANAGEMENT SOFTWARE

# USING YOLO:HOME

## Supervisor: Nguyen Manh Thin

```
Group: Gravity
```
```
HO CHI MINH CITY, 5/
```

### VIETNAM NATIONAL UNIVERSITY HO CHI MINH CITY

### UNIVERSITY OF TECHNOLOGY

### FACULTY OF COMPUTER SCIENCE & ENGINEERING

### REPORT

## SMART HOME MANAGEMENT SOFTWARE

## USING YOLO:HOME

###### STUDENT’S INFORMATIONS

|Fullname |ID| Email| Completion rate|
| --- | --- |  --- |  ---  | 
|Ho Duc Hung |2013381| hung.hoduccse@hcmut.edu.vn| 100%|
|Lam Dien Chinh |2012734| chinh.lamdien2002@hcmut.edu.vn| 100%|
|Nguyen Le Minh Bao| 2012670 |bao.nguyenminhbaott5@hcmut.edu.vn| 100%|
|Bui Anh Khoa |2011408 |khoa.bui140@hcmut.edu.vn |100%|


## Contents


- 1 Introduction
- 2 Project overview
- 3 Requirement
   - 3.1 Functional Requirement
      - 3.1.1 Internet of things aspect
      - 3.1.2 Web application aspect
   - 3.2 Non-Functional Requirement
      - 3.2.1 Internet of things aspect
      - 3.2.2 Web application aspect
- 4 Devices
   - 4.1 Input devices
      - 4.1.1 DHT20 sensor
      - 4.1.2 Light sensor
      - 4.1.3 Yolo bit
      - 4.1.4 Expansion circuit.
   - 4.2 Output devices
      - 4.2.1 LCD 16x2.
      - 4.2.2 Led RGB
      - 4.2.3 Servo
      - 4.2.4 Fan
- 5 Use-case Details
   - 5.1 Function
   - 5.2 Use-case diagram
   - 5.3 Use-case sceranio
      - 5.3.1 Login
      - 5.3.2 Register
      - 5.3.3 View temperature, humidity
      - 5.3.4 View brightness
      - 5.3.5 Filter
      - 5.3.6 Fan control
      - 5.3.7 Lamp control
      - 5.3.8 Door control
      - 5.3.9 Camera control
      - 5.3.10 History
      - 5.3.11 Notificate
      - 5.3.12 Change information
      - 5.3.13 Change avatar
      - 5.3.14 Change password
      - 5.3.15 Logout
- 6 Class diagram
   - 6.1 Detail class
      - 6.1.1 Class User
      - 6.1.2 Class Account
      - 6.1.3 Class Fan Control
      - 6.1.4 Class Lamp Control
      - 6.1.5 Class Door Control FACULTY OF COMPUTER SCIENCE AND ENGINEERING
      - 6.1.6 Class Camera Control
      - 6.1.7 Class View temperature, humidity
      - 6.1.8 Class View Brightness
   - 6.2 Class diagram Smart Home
- 7 Database Overview
- 8 Architecture design
   - 8.1 Client
      - 8.1.1 Design Pattern - Redux
      - 8.1.2 AI
   - 8.2 Server
      - 8.2.1 Design Pattern
         - 8.2.1.a Factory Method
         - 8.2.1.b Singleton Pattern
      - 8.2.2 Server Architecture
   - 8.3 IOT
- 9 Mockup User Interface
   - 9.1 Login page
   - 9.2 Sign up page
   - 9.3 Dashboard page
   - 9.4 Door page
   - 9.5 Light page
   - 9.6 TemperHumi page
   - 9.7 Notification page
   - 9.8 User page
- 10 Conclusion and Development Strategies
   - 10.1 Summary
   - 10.2 Self-evaluation
   - 10.3 Repository
   - 10.4 Development Strategies


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 1 Introduction

SMART HOME are becoming increasingly popular as technology advances and becomes more
affordable. A smart home is a house that uses internet-connected devices to remotely control and
monitor various systems and appliances, such as lighting, temperature, security, and entertainment.
These devices can be controlled through a smartphone app, voice commands, or a central hub.

Smart homes offer many benefits, such as increased energy efficiency, improved security, and
convenience. With smart lighting, for example, homeowners can schedule their lights to turn on and off
at specific times or control them remotely while away from home. Smart thermostats can adjust the
temperature automatically based on the homeowner’s preferences and schedule, helping to save energy
and reduce heating and cooling costs.

Additionally, smart homes can improve security by allowing homeowners to monitor their property
through cameras and receive alerts when there is any unusual activity. Smart locks can also be used
to control who has access to the home, and some systems can even automatically lock doors when the
homeowner leaves.

Overall, smart homes offer many advantages that can make life easier and more efficient. As
technology continues to advance, we can expect even more innovative and useful devices to become
available, making the smart home of the future even more exciting.

In this project, we plan to use hardware devices combined with smart devices (smart phones, laptops,
etc.) to control indoor devices as well as handle smart situations.

```
Figure 1:Smart Home
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 2 Project overview

```
Figure 2:Overview - Smart Home
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 3 Requirement

### 3.1 Functional Requirement

#### 3.1.1 Internet of things aspect

- Maintain ideal climatic conditions including temperature, venting, and lighting via different means:
    manually, automatically or periodically by schedule.
- Report issues that need manual intervention
- Provide live climate reports to the user via some form of display (graph view and log view).
- Periodically remind user to tend to manual tasks

#### 3.1.2 Web application aspect

- Allows users to check housing in a specific way, such as humidity, temperature, light
- Allows users to turn on or turn off devices such as fans, lights.
- Real-time display of temperature and related factors
- Statistical analysis and reports on the system’s condition and performance.
- Allows users to receive notification if data from sensors is out of range. Range of humidity is
    (20%-80%), temperature (15°C - 50°C) and light (20 - 400 lux).
- Allows users to see history of clicking buttons.
- Allows users to change information such as avatar, first name, lastname, email, phonenumber and
    password.

### 3.2 Non-Functional Requirement

#### 3.2.1 Internet of things aspect

- Run 24/7 with minimal scheduled downtime and preferably no unscheduled downtime.
- Device handling packaged in one or more MQTT server(s).
- The IoT system must be easily maintained, updated, and managed every year with minimal dis-
    ruption to existing systems and processes.
- The IoT system should be able to handle a large number of devices and data streams as the number
    of connected devices increases over time, at least 10 devices.
- Actuator delay time should be no more than five seconds.
- Persistently log historical readings for diagnostic purposes that keep tracks of the system’s status
    over at least 200 days.
- Scalable and efficient database system that has a capacity of at least 400MB.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 3.2.2 Web application aspect

- The system must ensure working correctly 24/7.
- Intuitive interface, comfortable to see, suitable for all users.
- Users can use fluently after 15 minutes of learning.
- Data transfers and queries between web application and devices must be at maximum 2 seconds
    for each action.
- Application can support multi-platforms.
- The system must be designed with a strong security framework to prevent unauthorized access,
    data breaches, and cyber-attacks.

## 4 Devices

### 4.1 Input devices

#### 4.1.1 DHT20 sensor

- Characteristics: Measure humidity and temperature.
- Usage: Environmental control in the house.

#### 4.1.2 Light sensor

- Characteristics: Check the light condition.
- Usage: Used to read the amount of ambient light in a room or outdoor area.

#### 4.1.3 Yolo bit

- Characteristics: This is the central control circuit.
- Usage: Handle communication between server and devices.

#### 4.1.4 Expansion circuit.

- Characteristics: Support connection.
- Usage: Help Yolo bit add more ports connection.

### 4.2 Output devices

4.2.1 LCD 16x

- Characteristics: Communicate with Yolo bit.
- Usage: Display some notifications.

#### 4.2.2 Led RGB

- Characteristics: Produce a Wide Range of Colors by Varying the Intensity of Each Color Channel.
- Usage: Lighting at night.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 4.2.3 Servo

- Characteristics: Communicate with Yolo bit.
- Usage: Open and close the doors.

#### 4.2.4 Fan

- Characteristics: Representative for a single or a group of fan.
- Usage: On and off the fans.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 5 Use-case Details

### 5.1 Function

Main functions of smart home app:

- Login: Users log in to access the app.
- Register: Users can sign up if they don’t have an account.
- Change information: Users can change personal information.
- Change avatar: Users can change their profile picture.
- Change password:Users can change account passwords.
- Logout: Users can log out of accounts.
- Fan control: users can control the fan on and off.
- Lamp control: users can control the light on and off.
- Door control: users can control the door on and off.
- Camera control: users can control the camera on and off to use AI to recognize faces.
- View temperature, humidity: Users can view the temperature and humidity at the current time.
- View brightness: Users can view the brightness at the current time.
- Filter : Users can reselect the old date to review its information.
- History: View user activity history on the app.
- Notificate: notify users when temperature, humidity, light exceeds the permissible threshold.

### 5.2 Use-case diagram


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

```
Figure 3:Use case Smart home
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 5.3 Use-case sceranio

#### 5.3.1 Login

```
Use case Login
Actor Users have not logged in
Description Users log in to the app
Preconditions
Triggers
```
```
Basic flow
```
```
1.The login area is displayed
```
2. Users enter enough email information and password
3. Users press the ”login” button
4.If the right login information, users will log in successfully and
the interface will move to ”Dashboard page”

```
Alternative flows 4A
4A1.If the login information is incomplete or wrong, then return
to step 1
Termination outcome User login successfully
```
#### 5.3.2 Register

```
Use case Register
Actor Users have not logged in
Description Users register for an account
Preconditions
Triggers Users Click Register at the login page
```
```
Basic flow
```
1. Registration area is displayed
2. Users enter enough registration information
3. User press the ”Sign up” button
4.If the registration information is correct, the system will notify
success and move to the login page

```
Alternative flows 4A
4A1.If the registration information is incomplete or wrong, then
return to step 1
Termination outcome User register successfully
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.3 View temperature, humidity

```
Use case View temperature,humidity
Actor Users have logged in
Description View information on the temperature, humidity of the house
Preconditions
Triggers Users click the Temperhumi icon in the sidebar
```
```
Basic flow
```
```
1.The Temperhumi page is displayed
```
2. Users view information, humidity of the house

```
Alternative flows
Termination outcome Temperhumi page is displayed
```
#### 5.3.4 View brightness

```
Use case View brightness
Actor Users have logged in
Description View information about the brightness of the house
Preconditions
Triggers Users click the light icon in the sidebar
```
```
Basic flow
```
```
1.The lighting page is displayed
```
2. Users view the brightness information of the house

```
Alternative flows
Termination outcome Light page is displayed
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.5 Filter

```
Use case Filter
Actor Users have logged in
Description Users can reselect the old date to review its information.
Preconditions Users must stay on Temperhumi or Light page
Triggers
```
```
Basic flow
```
1. Users choose the date to review information
2. User Click Filter
2.The news that day will be displayed

```
Alternative flows 2A 2A1. The selected date does not exist, return to step 1
Termination outcome Display date information to find
```
#### 5.3.6 Fan control

```
Use case Fan control
Actor Users have logged in
Description Users can control the fan on and off.
Preconditions Users on the dashboard or door page
Triggers
```
```
Basic flow
```
```
1.User click ON fan button
```
2. The fan will turn on

```
Alternative flows 1A
```
```
1A1. User click OFF fan button
1A2. The fan will turn off
```
```
Termination outcome Fan run
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.7 Lamp control

```
Use case Lamp control
Actor Users have logged in
Description users can control the light on and off.
Preconditions Users on the dashboard page
Triggers
```
```
Basic flow
```
```
1.User click ON led button
```
2. The led will turn on

```
Alternative flows 1A
```
```
1A1. User click OFF led button
1A2. The led will turn off
```
```
Termination outcome Led lights
```
#### 5.3.8 Door control

```
Use case Door control
Actor Users have logged in
Description users can control the door on and off.
Preconditions Users on the dashboard or door page
Triggers
```
```
Basic flow
```
```
1.User click ON door button
```
2. The door will turn on

```
Alternative flows 1A
```
```
1A1. User click OFF door button
1A2. The door will turn off
```
```
Termination outcome Door opens
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.9 Camera control

```
Use case Camera control
Actor Users have logged in
```
```
Description
users can control the camera on and off to use AI to recognize
faces.
Preconditions Users on the door page
Triggers
```
```
Basic flow
```
```
1.User click ON camera button
```
2. The camera will turn on and AI will connect

```
Alternative flows 1A
```
```
1A1. User click OFF camera button
1A2. The camera will turn off and AI will disconnect
```
```
Termination outcome Camera turn on
```
#### 5.3.10 History

```
Use case History
Actor Users have logged in
Description View user activity history on the app.
Preconditions
Triggers The user clicks the History icon in the sidebar
```
```
Basic flow
```
1. History page interface is displayed
2. Users view the history of activities on the app

```
Alternative flows
Termination outcome The History page is displayed
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.11 Notificate

```
Use case Notificate
Actor Users have logged in
```
```
Description
notify users when temperature, humidity, light exceeds the per-
missible threshold.
```
```
Preconditions
The user must be on the dashboard page, the Light page, the
TemperHumi page
Triggers
```
```
Basic flow
```
1. A notification will be displayed when a parameter exceeds the
permissible threshold
2. The message content will be saved in history

```
Alternative flows
Termination outcome Notifications will be displayed
```
#### 5.3.12 Change information

```
Use case Change information
Actor Users have logged in
Description Users can change personal information.
Preconditions
Triggers User clicks avatar icon
```
```
Basic flow
```
1. Users enter firstName information
2. Users enter lastname information
3. Users enter email information
4. Users enter phonenumber information
5. Users press the Change Information button

```
Alternative flows 5A 5A1. Change information failed, return to step 1
Termination outcome Change successful personal information
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.13 Change avatar

```
Use case Change avatar
Actor Users have logged in
Description Users can change their profile picture.
Preconditions
Triggers Users click Avatar icon
```
```
Basic flow
```
1. Users click on the file
2. The window select the image file
3. Users choose the image file you want to change
4. Users click Open to select image
5. User Click Change Avatar to change photos.

```
Alternative flows 4A 4A1. Users want to select another image, return to step 1
Termination outcome Change Avatar successfully
```
#### 5.3.14 Change password

```
Use case Change password
Actor Users have logged in
Description Users can change account passwords.
Preconditions
Triggers Users click Avatar icon
```
```
Basic flow
```
1. Users enter old password information at Old Password
2. Users enter new password information in New Password
3. Users click Change Password

```
Alternative flows 3A Change password failed, return step 1
Termination outcome Change password successfully
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 5.3.15 Logout

```
Use case Logout
Actor Users have logged in
Description Users can log out of accounts.
Preconditions
Triggers
```
```
Basic flow
```
1. Users click the logout icon at the sidebar
2. Does the notification system want to log out
3. Users Click OK

```
Alternative flows 2A
```
```
2aA1. Users click cancel
2A2. The system returns to the original page
```
```
Termination outcome Logout successfully
```

#### 6.1.5 Class Door Control FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 6 Class diagram

### 6.1 Detail class

Class diagram Smart home include 8 child class :

#### 6.1.1 Class User

Class User includes attributes:

- id: string (identify account)
- firstname, lastname: string (username)
- email: string
- phonenumber: string
- avatar: string

In addition, there are methods:

- ChangeInformation(): change personal information.
- ChangeAvatar(): change avatar

#### 6.1.2 Class Account

Class Account includes attributes:

- email: string (email to login)
- password: string

In addition, there are methods:

- ChangePassword(): change password user.

#### 6.1.3 Class Fan Control

Class Fan Control includes attributes:

- id: string (identify fan)
- room: string (Which room is the fan currently)
- speed: float (Fan speed runs)

In addition, there are methods :

- ChangeSpeed(): change fan speed.
- Control(): Control on, turn off the fan.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 6.1.4 Class Lamp Control

Class Lamp Control includes attributes:

- id: string (identify lamp)
- room: string (Which lamp is currently in)
- brightness: float (The brightness of the lamp)

In addition, there are methods :

- ChangeBrightness(): change brightness of the lamp.
- Control():Control on, turn off the lights.

6.1.5 Class Door Control

Class Door Control includes attributes:

- id: string (identify door)
- room: string (The door is currently in)

In addition, there are methods:

- Control(): Control closed, open door.

#### 6.1.6 Class Camera Control

Class Camera Control include attributes:

- id: string (identify camera)
- face: string (AI scan recognition identifier)

Ngo`ai ra gm c ́o c ́ac phng thc :

- RecognizeFace(): facial recognition.
- Control(): Control the camera on and off.
Class Camera Control has a dependent relationship with class Door Control to control automatic door
opening through facial recognition AI.

#### 6.1.7 Class View temperature, humidity

Class View temperature, humidity includes attributes:

- room: string (Temperature and humidity information of which room)
- time: date (Time to get temperature, humidity)
- temper: float (Temperature at that time)
- humi: float (Humidity at that time)
- data: array of float (Store data during the day)

In addition, there are methods :

- Filter():Review the information of the day to find in history.
- ShowChart(): Display temperature, humidity in the day of graphs.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 6.1.8 Class View Brightness

Class View Brightness includes attributes:

- room: string (Brightness information of which room)
- time: date (Time to take brightness)
- light: float (The brightness at that time)
- data: array of float (Store data during the day)

In addition, there are methods :

- Filter(): Review the information of the day to find in history.
- ShowChart(): Show brightness in the day of graph.

### 6.2 Class diagram Smart Home

```
Figure 4:Class diagram Smart home
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 7 Database Overview

```
Figure 5:Entity – Relationship Diagram Smart home
```
We will draft the database design used in this project using an entity-relationship diagram (ERD). This
diagram will illustrate the main entities stored in the database and the relationships between them.

Here we can see that the User entity (which stores detailed information) represents each user,
and other entities include Notification (which stores system notifications to users, notifications
exceeding thresholds, etc.),Activity Log(actions when users interact with function keys),Record
Data(sensor information and their data) depend on theUserentity.

In this project, we will implement the database usingMongoDB.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 8 Architecture design

### 8.1 Client

#### 8.1.1 Design Pattern - Redux

```
Figure 6:Redux
```
Redux is a state management library for React and React Native applications. It provides a solution
for managing complex application states, where different components can access and change the same
state.
Redux is an implementation of the Flux architecture, with basic components such as store, reducer,
and action. The application state is stored in the store, and can only be changed by sending actions to
the reducer.
Reducer is a function passed into the store, and it processes the actions sent to it.
Action is an object containing information about the event that the application needs to respond to,
such as adding a new object to a list or changing a property of an object.
Redux allows components in the application to access the state of the store through connections
(connect) with Redux. The components will update their own state when the store changes.
With Redux, managing the application state is significantly reduced, making development and
maintenance easier.
In addition, there is a concept of ”slice” in Redux. Specifically, ”slice” is a way to separate a part of
the Redux store (state) into a separate and independent part, making it easier to manage and reducing
complexity.

```
The Redux structure of the team is implemented as follows:
```
Specifically, the team uses Redux to manage states such as user (authSlice) and IoT (IoTSlice).
These states are stored in the store, allowing other components of the application to connect and retrieve
data. For example, all pages require information such as avatar or other user information, and instead
of being stored only in a specific component such as the Login page and passed back and forth between
components, they are stored in the state, making it easier to update the data. Similarly, IoT parameters


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

```
Figure 7:Redux Structure
```
are also stored in the state. The apiRequest contains services for calling APIs from the backend, and
some functions are related to user or IoT. After calling the APIs, the new information also needs to be
updated in the store.
For example, to make it easier to understand, suppose that the store contains the IoTSlice and we
want to retrieve the latest light data from the backend:

```
Figure 8:lightSlice
```
In IoTSlice, it contains information such as humidity, temperature, and light, which are readings
from sensors. Additionally, there are isFetching and error states, which are used to manage asynchronous
updates to the data within the slice. The reducers are used to update the light readings and include
updatelightStart, updatelightSuccess, and updatelightFailed. The update is carried out in the update-
lightSuccess reducer, at which point the new data contained within the action will be updated into the
light state.
And the action is dispatched as follows:

When the updatelight function is called, it will dispatch an empty action to confirm the calling API
status within the IoTSlice. Then, it starts to try to call the API to retrieve data from the backend. If
the data is successfully retrieved, it will dispatch an action containing the data (res) which is an object
that contains an array of light data. Conversely, if the API call fails, indicating a failure to retrieve data
from the backend, it will dispatch an action to the IoTSLice, returning a value of 0, meaning no new
data, and updating the light array in the initial state to an empty array.
The team used persistStore for the store. Specifically, persistStore is a method provided by the
redux-persist library, which allows storing the state of the Redux application in the browser’s local
storage so that it can be restored when the user revisits the application. Using persistStore increases the
stability and recoverability of the application, while minimizing the impact of issues such as data loss or
sudden application shutdown.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

```
Figure 9:light in apiRequest
```
```
Figure 10:Store
```
```
In the store, there is a rootReducer that combines the reducers from IoTSlice and authSlice.
```
#### 8.1.2 AI

Here, the group uses the face model to identify the face to identify the user through the pre -installed
face. When the camera scans AI, the system will identify and push the user name set on the Adafruit
server.
The App will receive AI data from Adafruit to process information and will be opened when
identifying the right homeowner and will not open the door when not properly identified.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

File model AI:kerasmodel.h5Stored in the IoT folder.
FilefaceAI.py: Combine the model file to handle facial recognition.

```
Figure 11:face AI Function
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 8.2 Server

#### 8.2.1 Design Pattern

##### 8.2.1.a Factory Method

```
Figure 12:The structure of factory method
```
Factory Method is a software design pattern in object-oriented programming (OOP) that allows objects
to be created through a pre-defined method.

In this design pattern, a base class provides a common interface for creating sub-class objects,
but does not make a decision about which specific class to instantiate. Instead, this decision is deferred
to the sub-classes, thus helping to decouple object creation from the class using the object.

With the Factory Method, object creation is encapsulated in a method that can be called di-
rectly from the object-using class or through an intermediary class. When an object needs to be created,
the object-using class simply calls the object creation method and does not need to concern itself with
the specific details of how the object is created.

The Factory Method design pattern is widely used in software applications to create objects depending
on the application’s requirements and helps to make the application’s expansion and maintenance easier.

##### 8.2.1.b Singleton Pattern

Singleton is a design pattern in object-oriented programming (OOP) that ensures a class has only one
instance (object) and provides a way to access that instance.

With Singleton Pattern, other classes in the program can only create a single instance of the
Singleton class and must use this object to access all the features and data of the class. This helps
ensure consistency and better resource management.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

```
Figure 13:The structure of singleton pattern.
```
The characteristics of Singleton Pattern:

- There is only one instance of the Singleton class.
- The instance of the Singleton class is created the first time the class is called.
- Other objects can access the instance of the Singleton class through an access method (get instance).

Some benefits of Singleton Pattern:

- Ensuring that there is only one instance of the Singleton class, minimizing memory resource waste.
- Having a global nature, allowing access to the Singleton instance from anywhere in the program.
- Easy to maintain and debug because only one change needs to be made for the entire application.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

#### 8.2.2 Server Architecture

```
Figure 14:Deployment view of our system
```
The system architecture consists of 3 main components:

- Appis where controllers, models, and interfaces of entities are located, which is the first place to
    receive requests and return responses to clients.
- Pkgis where necessary services are placed for controllers to handle requests from users. Controllers
    will use services inPkgand rely on models to respond when users call that API.
- Platform: When the controller handles a request, it will use the services inPkg. These services
    will rely on models to access data from the database, retrieve images from the cloud. This is where
    connections to the database and image repository of the system are made.

In addition,IOT Hardwareis the place to provide data APIs from sensors, services from Pkg through
HTTPS/UDP protocols to get data from sensors, process them, and store them in the database.

### 8.3 IOT

In this project, our system use Yolo Bit comunicate with serverAdafruit.io. Feeds which are used
included:

- Temperature: store temperature data.
- Humidity: store humidity data.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

- Light: store brightness data.
- BTNLED: send data on/off led.
- BTNFAN: send data on/off fan.
- BTNDOOR: send data open/close door.
- AI: store the result of face-detection.

Data of feeds will be send to the dashboard and display in the form of gauges and history charts. The
dashboard is also included history log to show the action executed.

```
Figure 15:Dashboard in Adafruit.io
```
The dashboard also shows the threshold for each feed; and when the data overcomes that threshold,
there will be an alert to the user.

```
This server communicates with Yolo Bit which operates the program showed in figure 16.
```

###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

```
Figure 16:Program in OhSystem App
```
When the system starts, it will automatically connect to internet and the sever in Adafruit. The
result of connection (success or fail) will be announced to user through a LCD.

When the connection successes, after each 3 seconds, the data of temperature, humidity, and bright-
ness will be captured and sent to sever. These data will be updated and stored in the corresponding
feeds. The system also receives from server the data: on/off led, fan or the result of AI operation to
open/close door,... in order to do the action required.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 9 Mockup User Interface

Note: Some of these mockups no longer reflect our current design and are only kept for archival and
comparative purposes.
Link to figma: Figma smart-home

### 9.1 Login page

```
Figure 17:Login page
```
This is the login page, where users enter their username and password in the corresponding fields.
The content will be sent to the backend to check if the user exists in the database. If not, the backend
will send an error message because the user does not exist. Conversely, if the login is successful, the user
will be redirected to the Dashboard page. If the user does not have an account, they can register by
clicking on the ”Register” link below the Login button.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.2 Sign up page

```
Figure 18:Sign up page
```
This is the registration page, where users need to fill in the following fields to register: firstname, last-
name, email, phonenumber, username, and password. Other fields may be duplicated, but the username
field is unique. After entering all the information, users need to click on the ”Register” button. If the
registration is successful, the user will be notified and redirected to the login page. If the user already
has an account, they can click on ”Had an account” to return to the login page.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.3 Dashboard page

```
Figure 19:Dashboard page
```
This is the Dashboard page that contains basic information about the user, temperature and humidity
readings, and control buttons. On the left side is the sidebar with the following items from top to bottom:
Dashboard, Door, Light, TemperHumi, Notification, and Logout. Clicking on any of these will take the
user to the corresponding page. In the center of the screen are control buttons for IoT devices such as
lights, fans, and doors. On the right side are tables displaying temperature and humidity readings. These
readings are updated every 5 seconds from the backend, which retrieves data directly from the Adafruit
server for the IoT devices. At the top are other information such as a morning greeting to the user, and
the user’s avatar, which will redirect to the User page when clicked.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.4 Door page

```
Figure 20:Door page
```
Except for the sidebar and user information content, the Door page contains three main components:
a camera screen, a display screen showing the results obtained by AI for user recognition, and a control
panel consisting of a fan, camera, and door.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.5 Light page

```
Figure 21:Light page
```
This is the Light page, consisting of three main components: a line chart for light index throughout
the day, a circular table displaying the current light index updated every 5 seconds, and a filter table to
select the date for viewing the light chart. Specifically, the horizontal axis of the line chart represents 24
hours in a day from 0 to 23, and the vertical axis represents the light index. Each hour is the average
value of the measured indices, and the index is only updated when the page is refreshed. If the light
index exceeds the threshold when updating, the system will display a warning and then store that alert
in the database so that users can check it again if necessary. In addition, the filter table allows users to
select the date to view the chart, which defaults to the current day.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.6 TemperHumi page

```
Figure 22:Light page
```
The temperature and humidity page is similar to the light page, as it contains information about
temperature and humidity. The data is also continuously updated and alerts are shown if the values
exceed a threshold. The alerts are also saved in the database. In addition, users can use the filter to
select the date they want to view on the chart.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.7 Notification page

```
Figure 23:Notification page
```
This is the Notification page that contains notifications about threshold alerts, as well as the user’s
activity log when they turn on or off something. Alert messages are displayed in yellow, while user actions
are displayed in blue. Each message includes its content and the time it occurred. This information is
stored in the database and displayed in reverse chronological order.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

### 9.8 User page

```
Figure 24:User page
```
This is the user page, containing user information such as avatar, personal information: firstname,
lastname, phonenumber, email. On this page, users can update their avatar. When clicking on ”choose
file”, a file window appears, and the user can select an image file to update. The request will be sent
to the backend, which will check and store it on Cloudinary, and keep the image link in Cloudinary in
the database instead of storing it directly. Moreover, users can also change their personal information.
Besides, they can also change their password. To do this, users need to enter their old and new passwords.
The request will be sent to the backend for verification. If the passwords are not the same, an error message
will be displayed; otherwise, the password will be updated, and a success message will be displayed.


###### FACULTY OF COMPUTER SCIENCE AND ENGINEERING

## 10 Conclusion and Development Strategies

### 10.1 Summary

Here are the things that we have achieved in this project:

- Successfully organizing an application to be the connection between hardware devices (i.e., sensors)
    and user for the aim to create a truly smart modern home, bringing many utilities as well as new
    experiences to users..
- Walking through the process of Software Engineering once again after the project from Practice on
    Software Engineering last year.
- Applying the knowledge of Database System to manage business data.
- Gaining skills of frameworks: React, MongoDB, Python, Go,etc..
- Teamwork skills.

### 10.2 Self-evaluation

The team with 4 members have made great contributions to the project. Accordingly,

- Nguyen Le Minh Bao : Build use-case diagram, use-case scerano, class diagram, Adafruit
    dashboard, AI integration. Implement the smart-home web app interface.
- Lam Dien Chinh:Implement the smart-home web app interface, create redux to manage state
    of software system, build requirements and figma.
- Ho Duc Hung: Design and implement the database. Use the Go language to implement system
    functions through REST APIs. Design the Beckend system and implement data processing tasks
    according to user requests.
- Bui Anh Khoa: Design the hardware system and use OhStem to configure the Yolo bit.

### 10.3 Repository

Githubhttps://github.com/iduchungho/smart-home

### 10.4 Development Strategies

From the thought that we have not fully developed, here are the potential suggestions for development
in the future whenever there is a chance to continue the project:

- The current project only applies to a specific room, in the future, it can develop more for many
    rooms in the house to be able to make better control.
- Project can add more new features such as: Controlling house cleaning equipment, wifi, TV, ...
- Improving AI function can change the facial identification settings according to the user without
    having to install it in advance
- Combine AI in processing data to notify, give the most appropriate ideas for users depending on
    the conditions.



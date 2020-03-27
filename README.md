# node-microservice-with-serverless

- This project is boilderplate structure for Node Microservice, that we can use for AWS Serverless thing as well.

- Here we are following serverless.yml > routers > controllers > services > repository pattern. 

# What routes contain ? 
- All route to different http API request will be defined here.

# What controllers contain ?
- It is basically perform error handling and receiving and sending incoming - outgoing payload.

# What services contains ?
- It contain all business logic along with generation of queries that we are going to perform on database.

# What repository contains ?
- It will import db connection and fire queries to db and return response accordingly. 

# Why to follow this structure ?
- Because this will saparate all the logic and the main factor is code complexity. I would suggest to use this flatten structure for neat and clean code. 